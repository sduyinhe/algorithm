package com.galaxy.mail;

import lombok.Data;

import java.io.Serializable;

/**
 * @author yhw
 */
@Data
public class EmailDto implements Serializable {
    private String recipient;
    private String subject;
    private String content;
}
