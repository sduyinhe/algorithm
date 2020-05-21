package com.galaxy.file;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Component
@Slf4j
public class FileRepository {
    @Autowired
    private ResourceProperties resourceProperties;
    final String specialS1 = "\0";
    final String specialS2 = "/";
    final String specialS3 = "\\";

    /**
     * 上传文件
     *
     * @param path 上传路径
     * @param ext  文件格式
     * @param file MultipartFile 文件
     * @throws IOException IOException
     * @Title: storeByExt
     * @return: String
     */
    public String storeByExt(String path, String ext, MultipartFile file) throws IOException {
        // String filename = UploadUtils.generateFilename(path, ext);
        // File dest = new File(getRealPath(filename));
        String fileName = UploadUtils.generateRamdonFilename(ext);
        String fileUrl = path + fileName;
        File dest = new File(getRealPath(path), fileName);
        dest = UploadUtils.getUniqueFile(dest);
        store(file, dest);
        return fileUrl;
    }

    /**
     * 上传文件
     *
     * @param path 上传路径
     * @param ext  文件格式
     * @param file MultipartFile 文件
     * @throws IOException IOException
     * @Title: storeByExt
     * @return: String
     */
    public String storeByExt(String path, String ext, File file) throws IOException {
        // String filename = UploadUtils.generateFilename(path, ext);
        // File dest = new File(getRealPath(filename));
        String fileName = UploadUtils.generateRamdonFilename(ext);
        String fileUrl = path + fileName;
        File dest = new File(getRealPath(path), fileName);
        dest = UploadUtils.getUniqueFile(dest);
        store(file, dest);
        return fileUrl;
    }

    /**
     * 上传文件，若文件存在，则直接覆盖
     *
     * @param filename 文件名
     * @param file     MultipartFile 文件
     * @throws IOException IOException
     * @Title: storeByExt
     * @return: String
     */
    public String storeByFilename(String filename, File file) throws IOException {
        File dest = new File(getRealPath(filename));
        store(file, dest);
        return filename;
    }

    /**
     * 上传文件
     *
     * @param filename 上传文件名
     * @param file     MultipartFile 文件
     * @throws IOException IOException
     * @Title: storeByExt
     * @return: String
     */
    public String storeByFilename(String filename, MultipartFile file) throws IOException {
        // filename.contains("/")||filename.contains("\\")||
        if (filename != null && (filename.indexOf(specialS1) != -1)) {
            return "";
        }
        filename = java.text.Normalizer.normalize(filename, java.text.Normalizer.Form.NFKD);
        File dest = new File(getRealPath(filename));
        store(file, dest);
        return filename;
    }

    /**
     * 上传文件
     *
     * @param path 上传路径
     * @param file MultipartFile 文件
     * @throws IOException IOException
     * @Title: storeByExt
     * @return: String
     */
    public String storeByFilePath(String path, String filename, MultipartFile file) throws IOException {
        boolean isValid = filename != null
                && (filename.contains(specialS2) || filename.contains(specialS3)
                || filename.indexOf(specialS1) != -1);
        if (isValid) {
            return "";
        }
        File dest = new File(getRealPath(path + filename));
        store(file, dest);
        return path + filename;
    }

    private void store(MultipartFile file, File dest) throws IOException {
        try {
            UploadUtils.checkDirAndCreate(dest.getParentFile());
            file.transferTo(dest);
            log.info("文件{}上传完毕", dest.getName());
        } catch (IOException e) {
            log.error("上传文件异常：", e);
            throw e;
        }
    }

    private void store(File file, File dest) throws IOException {
        try {
            UploadUtils.checkDirAndCreate(dest.getParentFile());
            FileUtils.copyFile(file, dest);
            log.info("文件{}上传完毕", dest.getName());
        } catch (IOException e) {
            log.error("上传文件异常：", e);
            throw e;
        }
    }

    /**
     * 获取文件对象
     *
     * @param name
     * @return
     */
    public File retrieve(String name) {
        return new File(getRealPath(name));
    }

    private String getRealPath(String path) {
        //return resourceProperties.fileRootPath + path;
        return "D:/test/nginx/" + path;
    }

    public static void main(String[] args) throws IOException {
        // D:/Download/test/nginx/
        File file = new File("D:/log1.log");
        FileRepository fileRepository = new FileRepository();
        String fileName = "yhw1.log";
        fileName = UploadUtils.generateMonthDayName() + fileRepository.specialS2 + fileName;
        fileRepository.storeByFilename(fileName, file);
    }

}
