package com.galaxy.file;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * 增加crm文件上传路径
 *
 * @author yhw
 */
@Component
@ConfigurationProperties(prefix = "crm.resource")
public class ResourceProperties {
    String fileRootPath;
    String urlRootPath;

    public String getFileRootPath() {
        return fileRootPath;
    }

    public void setFileRootPath(String fileRootPath) {
        this.fileRootPath = fileRootPath;
    }

    public String getUrlRootPath() {
        return urlRootPath;
    }

    public void setUrlRootPath(String urlRootPath) {
        this.urlRootPath = urlRootPath;
    }

}
