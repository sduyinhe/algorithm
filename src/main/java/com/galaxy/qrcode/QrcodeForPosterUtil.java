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
public class QrcodeForPosterUtil {

    public static void main(String[] args) throws IOException {
        try {
            QREncodeInPoster("https://www.baidu.com", "D:\\test\\originPoster.png", "D:\\test\\resultPoster.png");
        } catch (WriterException e) {
            e.printStackTrace();
        }

    }

    /**
     * 调整大小为指定宽高
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
     * 去除白边
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
    public static void QREncodeInPoster(String content, String posterPath, String desPath) throws WriterException, IOException {
        int width = 168; // 图像宽度
        int height = 168; // 图像高度
        String format = "png";// 图像类型
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
        BufferedImage dealedImage = dealWhiteBorder(MatrixToImageWriter.toBufferedImage(bitMatrix, matrixToImageConfig), bitMatrix.getEnclosingRectangle());
        ImageIO.write(LogoMatrixInPoster(modifyImageSize(dealedImage, width, height), new File(posterPath)), "png", new File(desPath));//输出带logo图片
        System.out.println("输出成功.");
    }

    /**
     * 海报添加二维码
     */
    public static BufferedImage LogoMatrixInPoster(BufferedImage matrixImage, File posterFile) throws IOException {
        /**
         * 读取海报图片
         */
        BufferedImage poster = ImageIO.read(posterFile);
        Graphics2D posterG2 = poster.createGraphics();

        //开始绘制图片
        posterG2.drawImage(matrixImage, 473, 1000, 168, 168, null);//绘制
        BasicStroke stroke = new BasicStroke(5, BasicStroke.CAP_ROUND, BasicStroke.JOIN_ROUND);
        posterG2.setStroke(stroke);// 设置笔画对象
        posterG2.setColor(Color.white);
        posterG2.dispose();
        poster.flush();
        return poster;
    }

}
