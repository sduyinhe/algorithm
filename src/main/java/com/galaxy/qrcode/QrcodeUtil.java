package com.galaxy.qrcode;

import com.google.zxing.*;
import com.google.zxing.client.j2se.BufferedImageLuminanceSource;
import com.google.zxing.client.j2se.MatrixToImageConfig;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.common.HybridBinarizer;
import com.google.zxing.qrcode.decoder.ErrorCorrectionLevel;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.geom.RoundRectangle2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 3.3.3版本的二维码无法用QRReader来解析一些二维码，
 * 但是3.4.0版本的二维码可以正常解析。
 */
public class QrcodeUtil {

    public static void main(String[] args) throws IOException, NotFoundException {
        try {
            long time1 = System.currentTimeMillis();
            String content = "https://weixin.qq.com/g/AQYAAF6exNycaCHE32mK60xtTnFDDRXzZwCXhmhxtd4ZbLdybkPGvkYUYjJzsgLZ";
            String logoPath = "D:\\test\\anye.jpg";
            String desPath = "D:\\test\\nvwang.png";
            QREncode(content, logoPath, desPath);
            System.out.println("生成二维码耗时：" + (System.currentTimeMillis() - time1));

            QRReader(new File("D:\\test\\nvwang1.png"));
        } catch (WriterException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (NotFoundException e) {
            //二维码无法识别会抛出该异常
            e.printStackTrace();
        }

        //  QRReader(new File("D:\\test\\nvwang1.png"));
        //p1ssogou.png p2s360.png
//        File fileDirectory = new File("D:\\test\\toProduct");
//        if (fileDirectory.isDirectory()) {
//            File[] files = fileDirectory.listFiles();
//            for (int i = 0; i < files.length; i++) {
//                try {
//                    //QRReader(new File("D:\\Download\\cms\\jeecms-parent\\jeecms-front\\src\\main\\webapp\\sr\\itg\\abao\\cms\\www\\202004\\26144931ppd2.jpg"));
//                    //QREncodeNoLogo();
//                    QRReader(files[i]);
//                    //QREncode();
//                } catch (IOException e) {
//                    e.printStackTrace();
//                } catch (NotFoundException e) {
//                    System.out.println("无法解析的文件" + files[i].getName());
////                    try {
////                        QRReaderWithPureBarcode(files[i]);
////                    } catch (IOException ex) {
////                        ex.printStackTrace();
////                    } catch (NotFoundException ex) {
////                        System.out.println("仍然无法解析"+files[i].getName());
////                        ex.printStackTrace();
////                    }
//                    e.printStackTrace();
//                }
//            }
//        }


    }

    /**
     * 生成二维码
     */
    public static void QREncode(String content, String logoPath, String desPath) throws WriterException, IOException {
        //String content = "https://weixin.qq.com/g/AQYAAF6exNycaCHE32mK60xtTnFDDRXzZwCXhmhxtd4ZbLdybkPGvkYUYjJzsgLZ";//二维码内容
        int width = 270; // 图像宽度
        int height = 270; // 图像高度
        String format = "gif";// 图像类型
        Map<EncodeHintType, Object> hints = new HashMap<>();
        //内容编码格式
        hints.put(EncodeHintType.CHARACTER_SET, "UTF-8");
        // 指定纠错等级
        hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.H);
        //设置二维码边的空度，非负数
        hints.put(EncodeHintType.MARGIN, 0);
        BitMatrix bitMatrix = new MultiFormatWriter().encode(content, BarcodeFormat.QR_CODE, width, height, hints);
        MatrixToImageWriter.writeToPath(bitMatrix, format, new File("D:\\test\\st.png").toPath());// 输出原图片
        MatrixToImageConfig matrixToImageConfig = new MatrixToImageConfig(0xFF000001, 0xFFFFFFFF);
        /*
            问题：生成二维码正常,生成带logo的二维码logo变成黑白
            原因：MatrixToImageConfig默认黑白，需要设置BLACK、WHITE
            解决：https://ququjioulai.iteye.com/blog/2254382
         */
        //BufferedImage bufferedImage = LogoMatrix(MatrixToImageWriter.toBufferedImage(bitMatrix, matrixToImageConfig), new File("D:\\test\\logo.png"));
//        BufferedImage bufferedImage = LogoMatrix(toBufferedImage(bitMatrix), new File("D:\\logo.png"));
        BufferedImage dealedImage = dealBufferedImage(dealWhiteBorder(MatrixToImageWriter.toBufferedImage(bitMatrix, matrixToImageConfig), bitMatrix.getEnclosingRectangle()));
        ImageIO.write(LogoMatrix(dealedImage, new File(logoPath)), "gif", new File(desPath));//输出带logo图片
        System.out.println("输出成功.");
    }

    /**
     * 识别二维码
     */
    public static void QRReader(File file) throws IOException, NotFoundException {
        MultiFormatReader formatReader = new MultiFormatReader();
        //读取指定的二维码文件
        BufferedImage bufferedImage = ImageIO.read(file);
        BinaryBitmap binaryBitmap = new BinaryBitmap(new HybridBinarizer(new BufferedImageLuminanceSource(bufferedImage)));
        //定义二维码参数
        Map hints = new HashMap<>();
        hints.put(EncodeHintType.CHARACTER_SET, "utf-8");
//        hints.put(DecodeHintType.TRY_HARDER, Boolean.TRUE);
//        hints.put(DecodeHintType.PURE_BARCODE, Boolean.TRUE);
        com.google.zxing.Result result = formatReader.decode(binaryBitmap, hints);
        //输出相关的二维码信息
        System.out.println("解析结果：" + result.toString());
        System.out.println("二维码格式类型：" + result.getBarcodeFormat());
        System.out.println("二维码文本内容：" + result.getText());
        bufferedImage.flush();
    }

    /**
     * 识别二维码
     */
    public static void QRReaderWithPureBarcode(File file) throws IOException, NotFoundException {
        MultiFormatReader formatReader = new MultiFormatReader();
        //读取指定的二维码文件
        BufferedImage bufferedImage = ImageIO.read(file);
        BinaryBitmap binaryBitmap = new BinaryBitmap(new HybridBinarizer(new BufferedImageLuminanceSource(bufferedImage)));
        //定义二维码参数
        Map hints = new HashMap<>();
        hints.put(EncodeHintType.CHARACTER_SET, "utf-8");
        //hints.put(DecodeHintType.TRY_HARDER, Boolean.TRUE);
        hints.put(DecodeHintType.PURE_BARCODE, Boolean.TRUE);
        com.google.zxing.Result result = formatReader.decode(binaryBitmap, hints);
        //输出相关的二维码信息
        System.out.println("Pure解析结果：" + result.toString());
        System.out.println("Pure二维码格式类型：" + result.getBarcodeFormat());
        System.out.println("Pure二维码文本内容：" + result.getText());
        bufferedImage.flush();
    }

    /**
     * 二维码添加logo
     *
     * @param matrixImage 源二维码图片
     * @param logoFile    logo图片
     * @return 返回带有logo的二维码图片
     * 参考：https://blog.csdn.net/weixin_39494923/article/details/79058799
     */
    public static BufferedImage LogoMatrix(BufferedImage matrixImage, File logoFile) throws IOException {
        /**
         * 读取二维码图片，并构建绘图对象
         */
        Graphics2D g2 = matrixImage.createGraphics();

        int matrixWidth = matrixImage.getWidth();
        int matrixHeigh = matrixImage.getHeight();

        /**
         * 读取Logo图片
         */
        BufferedImage logo = ImageIO.read(logoFile);

        //开始绘制图片
        g2.drawImage(logo, matrixWidth / 5 * 2, matrixHeigh / 5 * 2, matrixWidth / 5, matrixHeigh / 5, null);//绘制
        BasicStroke stroke = new BasicStroke(5, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND);
        g2.setStroke(stroke);// 设置笔画对象
        //指定弧度的圆角矩形
        RoundRectangle2D.Float round = new RoundRectangle2D.Float(matrixWidth / 5 * 2, matrixHeigh / 5 * 2, matrixWidth / 5, matrixHeigh / 5, 20, 20);
        g2.setColor(Color.white);
        g2.draw(round);// 绘制圆弧矩形
//
//        //设置logo 有一道灰色边框
//        BasicStroke stroke2 = new BasicStroke(1, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND);
//        g2.setStroke(stroke2);// 设置笔画对象
//        RoundRectangle2D.Float round2 = new RoundRectangle2D.Float(matrixWidth / 5 * 2 + 2, matrixHeigh / 5 * 2 + 2, matrixWidth / 5 - 4, matrixHeigh / 5 - 4, 20, 20);
//        //g2.setColor(new Color(128, 128, 128));
//        g2.setColor(Color.black);
//        g2.draw(round2);// 绘制圆弧矩形

        g2.dispose();
        matrixImage.flush();
        return matrixImage;
    }

    public static BufferedImage dealBufferedImage(BufferedImage matrixImage) throws IOException {
        int width = 300, height = 300;
        //创建图片对象
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
        //基于图片对象打开绘图
        Graphics2D graphics = image.createGraphics();


        //绘制矩形
        graphics.setBackground(Color.white);
        graphics.clearRect(0, 0, width, height);//通过使用当前绘图表面的背景色进行填充来清除指定的矩形。
        graphics.setColor(Color.white);
        graphics.drawImage(modifyImageSize(matrixImage, 270, 270), 15, 15, null);

        graphics.dispose();
        image.flush();
//
//        Graphics2D graphics1 = image.createGraphics();
//        int matrixWidth = 20;
//        int matrixHeigh = 20;
//        //RoundRectangle2D.Float round = new RoundRectangle2D.Float(matrixWidth / 5 * 2, matrixHeigh / 5 * 2, matrixWidth / 5, matrixHeigh / 5, 20, 20);
//        RoundRectangle2D.Float round = new RoundRectangle2D.Float(matrixWidth / 5 * 2, matrixHeigh / 5 * 2, matrixWidth / 5, matrixHeigh / 5, 20, 20);
//
//        graphics1.draw(round);// 绘制圆弧矩形
//        graphics1.dispose();
//        image.flush();

        return image;
    }

    /**
     * @param mini 贴图
     * @return
     */
    public static BufferedImage modifyImageSize(BufferedImage mini, int w, int h) {
        //设置生成图片宽*高，色彩
        BufferedImage bi = new BufferedImage(w, h, BufferedImage.TYPE_INT_RGB);
        //创建画布
        Graphics2D g2 = bi.createGraphics();
        //设置图片透明  注********：只有png格式的图片才能设置背景透明，jpg设置图片颜色变的乱七八糟
        bi = g2.getDeviceConfiguration().createCompatibleImage(w, h, Transparency.TRANSLUCENT);
        //重新创建画布
        g2 = bi.createGraphics();
        g2.setColor(Color.white);
        //画图
        g2.drawImage(mini, 0, 0, w, h, null);
        //关闭资源
        g2.dispose();
        return bi;
    }

    /**
     * 处理白边
     *
     * @return
     */
    public static BufferedImage dealWhiteBorder(BufferedImage image, int[] enclosingRectangle) {
        BufferedImage bi = new BufferedImage(enclosingRectangle[2], enclosingRectangle[3], BufferedImage.TYPE_INT_RGB);
        Graphics2D g2 = bi.createGraphics();
        g2.setColor(Color.white);
        g2.drawImage(image, 0, 0, enclosingRectangle[2], enclosingRectangle[3], enclosingRectangle[0], enclosingRectangle[1], enclosingRectangle[2] + enclosingRectangle[0], enclosingRectangle[3] + enclosingRectangle[1], null);
        g2.dispose();
        return bi;
    }

    /**
     * 生成二维码
     */
    public static void QREncodeNoLogo() throws WriterException, IOException {
        String content = "https://docs.qq.com/sheet/DTklLWExHSG5OUElz?c=I9A0A0";//二维码内容
        int width = 270; // 图像宽度
        int height = 270; // 图像高度
        String format = "gif";// 图像类型
        Map<EncodeHintType, Object> hints = new HashMap<>();
        //内容编码格式
        hints.put(EncodeHintType.CHARACTER_SET, "UTF-8");
        // 指定纠错等级
        hints.put(EncodeHintType.ERROR_CORRECTION, ErrorCorrectionLevel.H);
        //设置二维码边的空度，非负数
        hints.put(EncodeHintType.MARGIN, 0);
        BitMatrix bitMatrix = new MultiFormatWriter().encode(content, BarcodeFormat.QR_CODE, width, height, hints);
        MatrixToImageWriter.writeToPath(bitMatrix, format, new File("D:\\test\\zxing.png").toPath());// 输出原图片
        MatrixToImageConfig matrixToImageConfig = new MatrixToImageConfig(0xFF000001, 0xFFFFFFFF);
        /*
            问题：生成二维码正常,生成带logo的二维码logo变成黑白
            原因：MatrixToImageConfig默认黑白，需要设置BLACK、WHITE
            解决：https://ququjioulai.iteye.com/blog/2254382
         */
        //BufferedImage bufferedImage = LogoMatrix(MatrixToImageWriter.toBufferedImage(bitMatrix, matrixToImageConfig), new File("D:\\test\\logo.png"));
//        BufferedImage bufferedImage = LogoMatrix(toBufferedImage(bitMatrix), new File("D:\\logo.png"));
        BufferedImage dealedImage = dealBufferedImage(dealWhiteBorder(MatrixToImageWriter.toBufferedImage(bitMatrix, matrixToImageConfig), bitMatrix.getEnclosingRectangle()));
        //ImageIO.write(LogoMatrixNoLogo(dealedImage, new File("D:\\test\\logo.png")), "jpg", new File("D:\\test\\zxingNoLogo.jpg"));//输出带logo图片

        ImageIO.write(dealedImage, "jpg", new File("D:\\test\\zxingNoLogo.jpg"));//输出带logo图片

        System.out.println("输出成功.");
    }

    /**
     * 二维码添加logo
     *
     * @param matrixImage 源二维码图片
     * @param logoFile    logo图片
     * @return 返回带有logo的二维码图片
     * 参考：https://blog.csdn.net/weixin_39494923/article/details/79058799
     */
    public static BufferedImage LogoMatrixNoLogo(BufferedImage matrixImage, File logoFile) throws IOException {
        /**
         * 读取二维码图片，并构建绘图对象
         */
        Graphics2D g2 = matrixImage.createGraphics();

        int matrixWidth = matrixImage.getWidth();
        int matrixHeigh = matrixImage.getHeight();

        /**
         * 读取Logo图片
         */
        //BufferedImage logo = ImageIO.read(logoFile);

        //开始绘制图片
//        g2.drawImage(logo, matrixWidth / 5 * 2, matrixHeigh / 5 * 2, matrixWidth / 5, matrixHeigh / 5, null);//绘制
//        BasicStroke stroke = new BasicStroke(5, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND);
//        g2.setStroke(stroke);// 设置笔画对象
        //指定弧度的圆角矩形
        RoundRectangle2D.Float round = new RoundRectangle2D.Float(matrixWidth / 5 * 2, matrixHeigh / 5 * 2, matrixWidth / 5, matrixHeigh / 5, 20, 20);
        //g2.setColor(Color.white);
        g2.draw(round);// 绘制圆弧矩形
//
//        //设置logo 有一道灰色边框
//        BasicStroke stroke2 = new BasicStroke(1, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND);
//        g2.setStroke(stroke2);// 设置笔画对象
//        RoundRectangle2D.Float round2 = new RoundRectangle2D.Float(matrixWidth / 5 * 2 + 2, matrixHeigh / 5 * 2 + 2, matrixWidth / 5 - 4, matrixHeigh / 5 - 4, 20, 20);
//        //g2.setColor(new Color(128, 128, 128));
//        g2.setColor(Color.black);
//        g2.draw(round2);// 绘制圆弧矩形

        g2.dispose();
        matrixImage.flush();
        return matrixImage;
    }

}
