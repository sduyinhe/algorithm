
package com.galaxy.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.google.common.collect.Maps;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BaseModel implements Serializable {
    private static final Logger log = LoggerFactory.getLogger(BaseModel.class);
    public Integer id;
    public Integer createUserId;
    public transient String createUserUsername;
    public Integer updateUserId;
    public transient String updateUserUsername;
    @JsonFormat(
            pattern = "yyyy-MM-dd HH:mm:ss"
    )
    public LocalDateTime createTime;
    @JsonFormat(
            pattern = "yyyy-MM-dd HH:mm:ss"
    )
    public LocalDateTime updateTime;
    public String remark;
    public Integer deleteFlag;
    public transient Map<String, String> sqlMap;
    private transient String page;
    public transient String languageCode;

    public String getCreateUserUsername() {
        return this.createUserId != null && this.createUserId != 0 ? this.createUserUsername : "系统";
    }

    public String getUpdateUserUsername() {
        return this.updateUserId != null && this.updateUserId != 0 ? this.updateUserUsername : "系统";
    }

    public BaseModel() {
        this.deleteFlag = BaseModel.DeleteFlag.NORMAL.getValue();
    }

    public <T extends BaseModel> T Clean() {
        try {
            T t = (T) this.getClass().newInstance();
            t.setId(this.getId());
            return t;
        } catch (IllegalAccessException | InstantiationException var2) {
            log.error("clean exception:{} ", var2);
            return null;
        }
    }

    public void addSqlMap(String key, String value) {
        this.addSqlMap(key, value, 1);
    }

    public void addSqlMap(String key, String value, Integer expectedSize) {
        if (this.sqlMap == null) {
            this.sqlMap = Maps.newHashMapWithExpectedSize(expectedSize);
        }

        this.sqlMap.put(key, value);
    }

    public Integer getId() {
        return this.id;
    }

    public Integer getCreateUserId() {
        return this.createUserId;
    }

    public Integer getUpdateUserId() {
        return this.updateUserId;
    }

    public LocalDateTime getCreateTime() {
        return this.createTime;
    }

    public LocalDateTime getUpdateTime() {
        return this.updateTime;
    }

    public String getRemark() {
        return this.remark;
    }

    public Integer getDeleteFlag() {
        return this.deleteFlag;
    }

    public Map<String, String> getSqlMap() {
        return this.sqlMap;
    }

    public String getPage() {
        return this.page;
    }

    public String getLanguageCode() {
        return this.languageCode;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setCreateUserId(Integer createUserId) {
        this.createUserId = createUserId;
    }

    public void setCreateUserUsername(String createUserUsername) {
        this.createUserUsername = createUserUsername;
    }

    public void setUpdateUserId(Integer updateUserId) {
        this.updateUserId = updateUserId;
    }

    public void setUpdateUserUsername(String updateUserUsername) {
        this.updateUserUsername = updateUserUsername;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public void setDeleteFlag(Integer deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public void setSqlMap(Map<String, String> sqlMap) {
        this.sqlMap = sqlMap;
    }

    public void setPage(String page) {
        this.page = page;
    }

    public void setLanguageCode(String languageCode) {
        this.languageCode = languageCode;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        } else if (!(o instanceof BaseModel)) {
            return false;
        } else {
            BaseModel other = (BaseModel) o;
            if (!other.canEqual(this)) {
                return false;
            } else {
                label95:
                {
                    Object this$id = this.getId();
                    Object other$id = other.getId();
                    if (this$id == null) {
                        if (other$id == null) {
                            break label95;
                        }
                    } else if (this$id.equals(other$id)) {
                        break label95;
                    }

                    return false;
                }

                Object this$createUserId = this.getCreateUserId();
                Object other$createUserId = other.getCreateUserId();
                if (this$createUserId == null) {
                    if (other$createUserId != null) {
                        return false;
                    }
                } else if (!this$createUserId.equals(other$createUserId)) {
                    return false;
                }

                Object this$updateUserId = this.getUpdateUserId();
                Object other$updateUserId = other.getUpdateUserId();
                if (this$updateUserId == null) {
                    if (other$updateUserId != null) {
                        return false;
                    }
                } else if (!this$updateUserId.equals(other$updateUserId)) {
                    return false;
                }

                label74:
                {
                    Object this$createTime = this.getCreateTime();
                    Object other$createTime = other.getCreateTime();
                    if (this$createTime == null) {
                        if (other$createTime == null) {
                            break label74;
                        }
                    } else if (this$createTime.equals(other$createTime)) {
                        break label74;
                    }

                    return false;
                }

                label67:
                {
                    Object this$updateTime = this.getUpdateTime();
                    Object other$updateTime = other.getUpdateTime();
                    if (this$updateTime == null) {
                        if (other$updateTime == null) {
                            break label67;
                        }
                    } else if (this$updateTime.equals(other$updateTime)) {
                        break label67;
                    }

                    return false;
                }

                Object this$remark = this.getRemark();
                Object other$remark = other.getRemark();
                if (this$remark == null) {
                    if (other$remark != null) {
                        return false;
                    }
                } else if (!this$remark.equals(other$remark)) {
                    return false;
                }

                Object this$deleteFlag = this.getDeleteFlag();
                Object other$deleteFlag = other.getDeleteFlag();
                if (this$deleteFlag == null) {
                    if (other$deleteFlag != null) {
                        return false;
                    }
                } else if (!this$deleteFlag.equals(other$deleteFlag)) {
                    return false;
                }

                return true;
            }
        }
    }

    protected boolean canEqual(Object other) {
        return other instanceof BaseModel;
    }

    public String toString() {
        return "BaseModel(id=" + this.getId() + ", createUserId=" + this.getCreateUserId() + ", createUserUsername=" + this.getCreateUserUsername() + ", updateUserId=" + this.getUpdateUserId() + ", updateUserUsername=" + this.getUpdateUserUsername() + ", createTime=" + this.getCreateTime() + ", updateTime=" + this.getUpdateTime() + ", remark=" + this.getRemark() + ", deleteFlag=" + this.getDeleteFlag() + ", sqlMap=" + this.getSqlMap() + ", page=" + this.getPage() + ", languageCode=" + this.getLanguageCode() + ")";
    }

    public static enum DeleteFlag {
        NORMAL(0),
        DELETE(1);

        private int value;

        private DeleteFlag(int value) {
            this.value = value;
        }

        public int getValue() {
            return this.value;
        }
    }
}
