package com.galaxy.qrcode;

import lombok.Data;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

@Data
public class ImageUtil2 {
    private BufferedImage img;

    public ImageUtil2(File input) {
        try {
            img = ImageIO.read(input);
        } catch (IOException e) {
            throw new RuntimeException("Problem reading image", e);
        }
    }

    public BufferedImage trim() {
        int width = getTrimmedWidth();
        int height = getTrimmedHeight();
        int originWidth = img.getWidth();
        int originHeight = img.getHeight();
        int actualWitdh = originWidth - (originWidth - width) * 2;
        int actualHeight = originHeight - (originHeight - height) * 2;

        BufferedImage newImg = new BufferedImage(actualWitdh, actualHeight,
                BufferedImage.TYPE_INT_RGB);
        Graphics g = newImg.createGraphics();
        g.drawImage(img, width - originWidth, height - originHeight, null);
        img = newImg;
        return newImg;
    }

    public void write(File f) {
        try {
            ImageIO.write(img, "jpg", f);
        } catch (IOException e) {
            throw new RuntimeException("Problem writing image", e);
        }
    }

    private int getTrimmedWidth() {
        int height = this.img.getHeight();
        int width = this.img.getWidth();
        int trimmedWidth = 0;

        for (int i = 0; i < height; i++) {
            for (int j = width - 1; j >= 0; j--) {
                if (img.getRGB(j, i) != Color.WHITE.getRGB() &&
                        j > trimmedWidth) {
                    trimmedWidth = j;
                    break;
                }
            }
        }

        return trimmedWidth;
    }

    private int getTrimmedHeight() {
        int width = this.img.getWidth();
        int height = this.img.getHeight();
        int trimmedHeight = 0;

        for (int i = 0; i < width; i++) {
            for (int j = height - 1; j >= 0; j--) {
                if (img.getRGB(i, j) != Color.WHITE.getRGB() &&
                        j > trimmedHeight) {
                    trimmedHeight = j;
                    break;
                }
            }
        }

        return trimmedHeight;
    }

    public static void main(String[] args) {
        ImageUtil2 trim = new ImageUtil2(new File("D:/test/faheyouwenti1.jpg"));
        trim.trim();
        trim.write(new File("D:/test/faheyouwenti1NEW.jpg"));
    }
}
