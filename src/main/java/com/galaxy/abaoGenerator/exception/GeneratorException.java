package com.galaxy.abaoGenerator.exception;

/**
 * Created by luowei on 2017/7/26.
 */
public class GeneratorException extends RuntimeException {
    public GeneratorException(String message){
        super(message);
    }
    public GeneratorException(String message, Throwable cause) {
        super(message, cause);
    }
}
