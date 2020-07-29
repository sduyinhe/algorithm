package com.galaxy.qrcode;

import lombok.Data;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

@Data
public class ImageUtil {
    private BufferedImage img;
    private int actualWidth;
    private int actualHeight;
    private int actualX;
    private int actualY;

    public ImageUtil(File input) {
        try {
            img = ImageIO.read(input);
        } catch (IOException e) {
            throw new RuntimeException("Problem reading image", e);
        }
    }

    public BufferedImage trim() {
        dealTrimmedWidth();
        dealTrimmedHeight();
        BufferedImage newImg = new BufferedImage(actualWidth, actualHeight,
                BufferedImage.TYPE_INT_RGB);
        Graphics g = newImg.createGraphics();
        g.drawImage(img, -actualX, -actualY, actualWidth, actualHeight, null);
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

    private void dealTrimmedWidth() {
        int height = this.img.getHeight();
        int width = this.img.getWidth();
        int trimWidthStart = 0, trimWidthEnd = 0;

        for (int i = 0; i < height; i++) {
            for (int j = width - 1; j >= 0; j--) {
                if (img.getRGB(j, i) == Color.BLACK.getRGB() &&
                        j > trimWidthEnd) {
                    trimWidthEnd = j;
                    break;
                }
            }
            for (int j = 0; j < width; j++) {
                if (img.getRGB(j, i) == Color.BLACK.getRGB()) {
                    trimWidthStart = j;
                    break;
                }
            }
            if (trimWidthEnd != 0 && trimWidthStart != 0) {
                break;
            }
        }
        actualWidth = trimWidthEnd - trimWidthStart;
        actualX = trimWidthStart;
    }

    private void dealTrimmedHeight() {
        int width = this.img.getWidth();
        int height = this.img.getHeight();
        int trimHeightStart = 0, trimHegithEnd = 0;

        for (int i = 0; i < width; i++) {
            for (int j = height - 1; j >= 0; j--) {
                if (img.getRGB(i, j) == Color.BLACK.getRGB() &&
                        j > trimHegithEnd) {
                    trimHegithEnd = j;
                    break;
                }
            }
            for (int j = 0; j < height; j++) {
                if (img.getRGB(i, j) == Color.BLACK.getRGB()) {
                    trimHeightStart = j;
                    break;
                }
            }

            if(trimHegithEnd!=0&&trimHeightStart!=0){
                break;
            }
        }
        actualHeight = trimHegithEnd - trimHeightStart;
        actualY = trimHeightStart;
    }

    public static void main(String[] args) {
        ImageUtil trim = new ImageUtil(new File("D:/test/faheyouwenti1.jpg"));
        trim.trim();
        trim.write(new File("D:/test/faheyouwenti2nowhite.jpg"));
    }
}
