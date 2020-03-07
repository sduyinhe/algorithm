package com.galaxy.entity;

public enum PersonEnum {
    /**
     * dialout外呼通话,normal普通来电,transfer呼入转接,dialTransfer外呼转接
     */
    DIALOUT("dialout"), NORMAL("normal"), TRANSFER("transfer"), DIAL_TRANSFER("dialTransfer");
    public String type;

    private PersonEnum(String type) {
        this.type = type;
    }

    public String getType() {
        return this.type;
    }

    public static PersonEnum fromType(String tmpType) {
        for (PersonEnum personEnum : PersonEnum.values()) {
            if (personEnum.getType().equals(tmpType)) {
                return personEnum;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        for (PersonEnum personEnum : PersonEnum.values()) {
            System.out.println("ordinal=" + personEnum.ordinal() + "    type=" + personEnum.getType() + "      name=" + personEnum.name());
        }

        PersonEnum personEnum = PersonEnum.valueOf("DIALOUT");
        System.out.println(personEnum.name());

        PersonEnum personEnum2 = PersonEnum.valueOf(PersonEnum.class, "NORMAL");
        System.out.println(personEnum2.name() + "    ordernl=" + personEnum2.ordinal());

        PersonEnum personEnum1 = PersonEnum.fromType("transfer");
        System.out.println("personEnum1 = "+personEnum1+" ordernl="+personEnum1.ordinal()+" name="+personEnum1.name());
    }
}