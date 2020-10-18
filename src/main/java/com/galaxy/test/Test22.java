package com.galaxy.test;

import com.google.common.collect.ImmutableList;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Test22 {
    private static String getPerformanceDistributionTest(List<StaffTask> staffTaskList) {
        //统计每个应用下交易笔数
        Map<String, Long> assessmentLevelMap = staffTaskList.stream().filter(ele -> ele.getAssessmentLevel() != null).collect(Collectors.groupingBy(StaffTask::getAssessmentLevel, Collectors.counting()));
        // S：1.5%   A：0%   B：73%   C：10.2%   D：0%
        StringBuffer stringBuffer = new StringBuffer();
        BigDecimal bigDecimalLength = new BigDecimal(staffTaskList.size());
        BigDecimal sBigDecimal = assessmentLevelMap.get("S") == null ? new BigDecimal(0) : new BigDecimal(assessmentLevelMap.get("S"));
        BigDecimal aBigDecimal = assessmentLevelMap.get("A") == null ? new BigDecimal(0) : new BigDecimal(assessmentLevelMap.get("A"));
        BigDecimal bBigDecimal = assessmentLevelMap.get("B") == null ? new BigDecimal(0) : new BigDecimal(assessmentLevelMap.get("B"));
        BigDecimal cBigDecimal = assessmentLevelMap.get("C") == null ? new BigDecimal(0) : new BigDecimal(assessmentLevelMap.get("C"));
        BigDecimal dBigDecimal = assessmentLevelMap.get("D") == null ? new BigDecimal(0) : new BigDecimal(assessmentLevelMap.get("D"));
        DecimalFormat decimalFormat = new DecimalFormat("#.#");
        stringBuffer.append("S：").append(decimalFormat.format(sBigDecimal.divide(bigDecimalLength, 3, RoundingMode.HALF_UP).multiply(new BigDecimal(100)))).append("% ");
        stringBuffer.append("A：").append(decimalFormat.format(aBigDecimal.divide(bigDecimalLength, 3, RoundingMode.HALF_UP).multiply(new BigDecimal(100)))).append("% ");
        stringBuffer.append("B：").append(decimalFormat.format(bBigDecimal.divide(bigDecimalLength, 3, RoundingMode.HALF_UP).multiply(new BigDecimal(100)))).append("% ");
        stringBuffer.append("C：").append(decimalFormat.format(cBigDecimal.divide(bigDecimalLength, 3, RoundingMode.HALF_UP).multiply(new BigDecimal(100)))).append("% ");
        stringBuffer.append("D：").append(decimalFormat.format(dBigDecimal.divide(bigDecimalLength, 3, RoundingMode.HALF_UP).multiply(new BigDecimal(100)))).append("% ");
        return stringBuffer.toString();
    }

    public static void main(String[] args) {
        StaffTask staffTask = StaffTask.builder().build();
        staffTask.setAssessmentScore(96);
        staffTask.setStory1Score(9);
        staffTask.setStory2Score(10);
        staffTask.setStory3Score(10);
//        staffTask.setAssessmentLevel("S");
//        StaffTask staffTask2 = StaffTask.builder().build();
//        staffTask2.setAssessmentLevel("D");
//        StaffTask staffTask3 = StaffTask.builder().build();
//        staffTask3.setAssessmentLevel("A");
//        StaffTask staffTask4 = StaffTask.builder().build();
//        staffTask4.setAssessmentLevel("S");
//        StaffTask staffTask5 = StaffTask.builder().build();
//        staffTask5.setAssessmentLevel("S");
//        StaffTask staffTask6 = StaffTask.builder().build();
//       //staffTask6.setAssessmentLevel("S");
//
//        System.out.println(getPerformanceDistributionTest(ImmutableList.of(staffTask, staffTask2, staffTask3, staffTask4, staffTask5, staffTask6)));

        Integer assessmentScore = staffTask.getAssessmentScore();
        if (assessmentScore == null) {
            assessmentScore = new Integer(0);
        }
        Integer story1Score = staffTask.getStory1Score();
        if (story1Score == null) {
            story1Score = new Integer(0);
        }
        Integer story2Score = staffTask.getStory2Score();
        if (story2Score == null) {
            story2Score = new Integer(0);
        }
        Integer story3Score = staffTask.getStory3Score();
        if (story3Score == null) {
            story3Score = new Integer(0);
        }
        BigDecimal assessmentScoreDecimal = new BigDecimal(assessmentScore);
        BigDecimal decimal = assessmentScoreDecimal
                .multiply(new BigDecimal("0.7"))
                .add(new BigDecimal(story1Score))
                .add(new BigDecimal(story2Score))
                .add(new BigDecimal(story3Score));
        System.out.println(decimal.doubleValue());
    }

}
