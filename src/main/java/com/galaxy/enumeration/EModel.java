package com.galaxy.enumeration;

public enum EModel {
    SINGLE,//单例
    MASTER_SLAVE,//主从
    SENTINEL,//哨兵
    CLUSTER,//集群
    REPLICATED,//云托管模式
    PROXY//代理模式
}
