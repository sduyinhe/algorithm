package com.galaxy.entity;

import com.google.common.collect.ImmutableMap;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;
import java.util.Map;

/**
 * 内容主体实体类
 *
 * @author: chenming
 * @date: 2019年5月6日 下午2:32:20
 */
@Data
public class Content implements Serializable {
    private static final long serialVersionUID = 1L;

    public static final String CONTENT_CACHE_KEY = "CONTENT";

    /**
     * id名称
     */
    public static final String ID_NAME = "id";

    /**
     * 内容状态
     */
    public static final Map<Integer, String> STATUS_DEPICT = ImmutableMap.<Integer, String>builder().put(1, "草稿")
            .put(2, "初稿").put(3, "流转中").put(4, "已审核").put(5, "已发布").put(6, "退回").put(7, "下线").put(8, "归档")
            .put(9, "暂存").put(10, "驳回").build();

    /**
     * 评论设置
     */
    public static final Map<Integer, String> COMMENT_DEPICT = ImmutableMap.of(1, "允许游客评论", 2, "登录后评论", 3, "不允许评论");

    /**
     * 浏览设置
     */
    public static final Map<Integer, String> VIEW_DEPICT = ImmutableMap.of(1, "允许游客访问", 2, "登录后访问");

    /**
     * 发布平台-平台
     */
    public static final String RELEASE_PC_NAME = "releasePc";
    /**
     * 发布平台-wap
     */
    public static final String RELEASE_WAP_NAME = "releaseWap";
    /**
     * 发布平台-app
     */
    public static final String RELEASE_APP_NAME = "releaseApp";
    /**
     * 发布平台-小程序
     */
    public static final String RELEASE_MINIPROGRAM_NAME = "releaseMiniprogram";

    /**
     * 自动保存版本
     */
    public static final String AUTOMATIC_SAVE_VERSION_TRUE = "1";
    /**
     * 非自动保存版本
     */
    public static final String AUTOMATIC_SAVE_VERSION_FALSE = "0";

    public static final String TITLE_NAME = "title";
    public static final String TITLE_IS_BOLD_NAME = "titleIsBold";
    public static final String TITLE_COLOR_NAME = "titleColor";

    private Integer id;
    /**
     * 栏目ID
     */
    private Integer channelId;
    /**
     * 撰写管理员ID
     */
    private Integer userId;
    /**
     * 发布管理员
     */
    private Integer publishUserId;
    /**
     * 模型ID
     */
    private Integer modelId;
    /**
     * 站点ID
     */
    private Integer siteId;
    /**
     * 内容标题
     */
    private String title;
    /**
     * 内容标题是否加粗
     */
    private Boolean titleIsBold;
    /**
     * 内容标题的颜色
     */
    private String titleColor;
    /**
     * 简短标题
     */
    private String shortTitle;
    /**
     * 发布时间
     */
    private Date releaseTime;
    /**
     * 下线时间
     **/
    private Date offlineTime;
    /**
     * 内容密级
     */
    private Integer contentSecretId;
    /**
     * 内容状态(1:草稿; 2-初稿 3:流转中; 4:已审核; 5:已发布; 6:退回; 7:下线; 8:归档; 9:暂存;10:驳回 )
     */
    private Integer status;
    /**
     * 创建方式（1:直接创建 2:投稿 3:站群推送 4:站群采集 5:复制 6:链接型引用 7:镜像型引用）8 外部采集
     **/
    private Integer createType;
    /**
     * 是否编辑（0-否 1-是）
     **/
    private Boolean edit;
    /**
     * 排序值权重(排序值相同情况下，权重越大，排序越前)
     */
    private Integer sortWeight;
    /**
     * 浏览量
     */
    private Integer views;
    /**
     * 评论量
     */
    private Integer comments;
    /**
     * 点赞数
     **/
    private Integer ups;
    /**
     * 点踩数
     **/
    private Integer downs;
    /**
     * 下载量
     */
    private Integer downloads;
    /**
     * 评论设置(1允许游客评论 2登录后评论 3不允许评论)
     **/
    private Integer commentControl;
    /**
     * 是否置顶
     **/
    private Boolean top;
    /**
     * 置顶开始时间
     **/
    private Date topStartTime;
    /**
     * 置顶结束时间
     **/
    private Date topEndTime;
    /**
     * 浏览设置（1-允许游客访问 2-登录后访问）
     */
    private Short viewControl;
    /**
     * 是否发布至pc（0-否 1-是）
     **/
    private Boolean releasePc;
    /**
     * 是否发布至wap（0-否 1-是）
     **/
    private Boolean releaseWap;
    /**
     * 是否发布至app（0-否 1-是）
     **/
    private Boolean releaseApp;
    /**
     * 是否发布至小程序（0-否 1-是）
     **/
    private Boolean releaseMiniprogram;
    /**
     * 是否加入回收站（0-否 1-是）
     **/
    private Boolean recycle;
    /**
     * 复制来源内容id
     **/
    private Integer copySourceContentId;
    /**
     * 是否已生成静态化页面
     */
    private Boolean hasStatic;

    private String checkMark;

    /**
     * 是否已收藏
     */
    private Boolean collection;

    public Content() {

    }

    public String getReleaseTimeString() {
        return "前天";
    }

    Integer contentId;
    String description;
    String author;
    String biaotituUrl;
    String keywords;

    public String getBiaotituUrl() {
        return this.biaotituUrl;
    }

    public void setBiaotituUrl(String biaotituUrl) {
        this.biaotituUrl = biaotituUrl;
    }

}