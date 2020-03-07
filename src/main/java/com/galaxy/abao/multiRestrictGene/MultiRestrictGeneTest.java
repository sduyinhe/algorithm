package com.galaxy.abao.multiRestrictGene;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class MultiRestrictGeneTest {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        MultiRestrictGeneTest multiRestrictGeneTest = new MultiRestrictGeneTest();
        String jsonStr = multiRestrictGeneTest.getMultiRestrictGene();
        ObjectMapper objectMapper = new ObjectMapper();
        List<RestrictGene> restrictGeneList = objectMapper.readValue(jsonStr, new TypeReference<List<RestrictGene>>() {
        });
        RestrictGene restrictGene3 = restrictGeneList.get(2);
        List<String> showRestrictGeneList = new ArrayList<>();
        restrictGene3.getPreconditions().stream().forEach(precondition -> {
            StringBuilder sb = new StringBuilder("前置条件\t    编号\t    年龄\t         展示交费年期\n");
            final String restrictGeneName = restrictGeneList.stream().filter(restrictGene -> restrictGene.getId().intValue() == Integer.parseInt(precondition.getCode())).findFirst().get().getDataDictionary().getName();
            precondition.getRelationships().stream().forEach(relationship -> {
                Interval interval = relationship.getPreInterval();
                sb.append(restrictGeneName + "\t" + interval.getId() + "\t" + interval.getMin() + "周岁-" + interval.getMax() + "周岁 ");
                List<Option> optionList = relationship.getPostOptions();
                sb.append(String.join(",", optionList.stream().map(option -> option.getValue() + "年").collect(Collectors.toList())));
                sb.append("\n");
            });
            showRestrictGeneList.add(sb.toString());
        });
        while (true) {
            Precondition precondition1 = restrictGene3.getPreconditions().get(0);
            Precondition precondition2 = restrictGene3.getPreconditions().get(1);
            Relationship resultRelationship = multiRestrictGeneTest.getRelationship(1, precondition1, showRestrictGeneList, sc);
            List<Option> optionList1 = resultRelationship.getPostOptions();
            Relationship resultRelationship2 = multiRestrictGeneTest.getRelationship(2, precondition2, showRestrictGeneList, sc);
            List<Option> optionList2 = resultRelationship2.getPostOptions();
            //取交集
            optionList1.retainAll(optionList2);
            Interval resultInterval1 = resultRelationship.getPreInterval();
            Interval resultInterval2 = resultRelationship2.getPreInterval();
            System.out.println("前置条件1：");
            System.out.println(resultInterval1.getMin() + "周岁-" + resultInterval1.getMax() + "周岁 ");
            System.out.println("前置条件2：");
            System.out.println(resultInterval2.getMin() + "周岁-" + resultInterval2.getMax() + "周岁 ");
            System.out.println("取交集得到展示缴费年期为：" + optionList1.stream().map(option -> option.getValue() + "年").collect(Collectors.joining(",")));
            System.out.println();
        }
    }

    private Relationship getRelationship(Integer ordinal, Precondition precondition, List<String> showRestrictGeneList, Scanner sc) {
        System.out.println("请输入前置条件" + ordinal.intValue() + "的编号:");
        System.out.println(showRestrictGeneList.get(ordinal.intValue() - 1));
        Integer restrictGene1 = Integer.valueOf(sc.nextLine());
        Relationship resultRelationship = precondition.getRelationships().stream().filter(relationship -> relationship.getPreInterval().getId().intValue() == restrictGene1.intValue()).findFirst().orElse(null);
        if (resultRelationship == null) {
            System.out.println("输入的" + restrictGene1 + "不存在，请重新输入！");
            resultRelationship = getRelationship(ordinal, precondition, showRestrictGeneList, sc);
        }
        return resultRelationship;
    }

    public String getMultiRestrictGene() {
        String jsonStr = "[\n" +
                "            {\n" +
                "                \"id\": 9868,\n" +
                "                \"code\": \"9868\",\n" +
                "                \"defaultValue\": null,\n" +
                "                \"interval\": {\n" +
                "                    \"id\": 12022,\n" +
                "                    \"min\": 18,\n" +
                "                    \"minUnit\": {\n" +
                "                        \"name\": \"岁\",\n" +
                "                        \"value\": 3\n" +
                "                    },\n" +
                "                    \"minIsClosed\": true,\n" +
                "                    \"max\": 60,\n" +
                "                    \"maxUnit\": {\n" +
                "                        \"name\": \"岁\",\n" +
                "                        \"value\": 3\n" +
                "                    },\n" +
                "                    \"maxIsClosed\": true\n" +
                "                },\n" +
                "                \"preconditions\": [],\n" +
                "                \"dataDictionary\": {\n" +
                "                    \"id\": 9,\n" +
                "                    \"name\": \"投保人年龄\",\n" +
                "                    \"type\": {\n" +
                "                        \"name\": \"范围区间\",\n" +
                "                        \"value\": 2\n" +
                "                    },\n" +
                "                    \"withUnit\": true,\n" +
                "                    \"units\": [\n" +
                "                        {\n" +
                "                            \"name\": \"岁\",\n" +
                "                            \"value\": 3\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"name\": \"天\",\n" +
                "                            \"value\": 1\n" +
                "                        }\n" +
                "                    ],\n" +
                "                    \"options\": [],\n" +
                "                    \"labels\": []\n" +
                "                },\n" +
                "                \"type\": {\n" +
                "                    \"name\": \"日历\",\n" +
                "                    \"value\": 2\n" +
                "                },\n" +
                "                \"convertUnit\": {\n" +
                "                    \"name\": \"岁\",\n" +
                "                    \"value\": 3\n" +
                "                }\n" +
                "            },\n" +
                "            {\n" +
                "                \"id\": 9869,\n" +
                "                \"code\": \"9869\",\n" +
                "                \"defaultValue\": null,\n" +
                "                \"interval\": {\n" +
                "                    \"id\": 12023,\n" +
                "                    \"min\": 30,\n" +
                "                    \"minUnit\": {\n" +
                "                        \"name\": \"天\",\n" +
                "                        \"value\": 1\n" +
                "                    },\n" +
                "                    \"minIsClosed\": true,\n" +
                "                    \"max\": 50,\n" +
                "                    \"maxUnit\": {\n" +
                "                        \"name\": \"岁\",\n" +
                "                        \"value\": 3\n" +
                "                    },\n" +
                "                    \"maxIsClosed\": true\n" +
                "                },\n" +
                "                \"preconditions\": [],\n" +
                "                \"dataDictionary\": {\n" +
                "                    \"id\": 10,\n" +
                "                    \"name\": \"被保人年龄\",\n" +
                "                    \"type\": {\n" +
                "                        \"name\": \"范围区间\",\n" +
                "                        \"value\": 2\n" +
                "                    },\n" +
                "                    \"withUnit\": true,\n" +
                "                    \"units\": [\n" +
                "                        {\n" +
                "                            \"name\": \"岁\",\n" +
                "                            \"value\": 3\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"name\": \"天\",\n" +
                "                            \"value\": 1\n" +
                "                        }\n" +
                "                    ],\n" +
                "                    \"options\": [],\n" +
                "                    \"labels\": []\n" +
                "                },\n" +
                "                \"type\": {\n" +
                "                    \"name\": \"日历\",\n" +
                "                    \"value\": 2\n" +
                "                },\n" +
                "                \"convertUnit\": {\n" +
                "                    \"name\": \"岁\",\n" +
                "                    \"value\": 3\n" +
                "                }\n" +
                "            },\n" +
                "            {\n" +
                "                \"id\": 9870,\n" +
                "                \"code\": \"9870\",\n" +
                "                \"defaultValue\": null,\n" +
                "                \"options\": [\n" +
                "                    {\n" +
                "                        \"id\": 12126,\n" +
                "                        \"value\": \"15\",\n" +
                "                        \"unit\": {\n" +
                "                            \"name\": \"年\",\n" +
                "                            \"value\": 2\n" +
                "                        }\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"id\": 12127,\n" +
                "                        \"value\": \"20\",\n" +
                "                        \"unit\": {\n" +
                "                            \"name\": \"年\",\n" +
                "                            \"value\": 2\n" +
                "                        }\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"id\": 12129,\n" +
                "                        \"value\": \"10\",\n" +
                "                        \"unit\": {\n" +
                "                            \"name\": \"年\",\n" +
                "                            \"value\": 2\n" +
                "                        }\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"id\": 12130,\n" +
                "                        \"value\": \"5\",\n" +
                "                        \"unit\": {\n" +
                "                            \"name\": \"年\",\n" +
                "                            \"value\": 2\n" +
                "                        }\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"id\": 12128,\n" +
                "                        \"value\": \"30\",\n" +
                "                        \"unit\": {\n" +
                "                            \"name\": \"年\",\n" +
                "                            \"value\": 2\n" +
                "                        }\n" +
                "                    }\n" +
                "                ],\n" +
                "                \"preconditions\": [\n" +
                "                    {\n" +
                "                        \"id\": 15,\n" +
                "                        \"code\": \"9868\",\n" +
                "                        \"relationships\": [\n" +
                "                            {\n" +
                "                                \"id\": 18,\n" +
                "                                \"display\": true,\n" +
                "                                \"preInterval\": {\n" +
                "                                    \"id\": 12024,\n" +
                "                                    \"min\": 18,\n" +
                "                                    \"minUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"minIsClosed\": false,\n" +
                "                                    \"max\": 40,\n" +
                "                                    \"maxUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"maxIsClosed\": false\n" +
                "                                },\n" +
                "                                \"postOptions\": [\n" +
                "                                    {\n" +
                "                                        \"id\": 12126,\n" +
                "                                        \"value\": \"15\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12127,\n" +
                "                                        \"value\": \"20\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12129,\n" +
                "                                        \"value\": \"10\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12130,\n" +
                "                                        \"value\": \"5\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12128,\n" +
                "                                        \"value\": \"30\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    }\n" +
                "                                ]\n" +
                "                            },\n" +
                "                            {\n" +
                "                                \"id\": 19,\n" +
                "                                \"display\": true,\n" +
                "                                \"preInterval\": {\n" +
                "                                    \"id\": 12025,\n" +
                "                                    \"min\": 41,\n" +
                "                                    \"minUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"minIsClosed\": false,\n" +
                "                                    \"max\": 50,\n" +
                "                                    \"maxUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"maxIsClosed\": false\n" +
                "                                },\n" +
                "                                \"postOptions\": [\n" +
                "                                    {\n" +
                "                                        \"id\": 12126,\n" +
                "                                        \"value\": \"15\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12127,\n" +
                "                                        \"value\": \"20\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12129,\n" +
                "                                        \"value\": \"10\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12130,\n" +
                "                                        \"value\": \"5\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    }\n" +
                "                                ]\n" +
                "                            },\n" +
                "                            {\n" +
                "                                \"id\": 20,\n" +
                "                                \"display\": true,\n" +
                "                                \"preInterval\": {\n" +
                "                                    \"id\": 12026,\n" +
                "                                    \"min\": 51,\n" +
                "                                    \"minUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"minIsClosed\": false,\n" +
                "                                    \"max\": 55,\n" +
                "                                    \"maxUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"maxIsClosed\": false\n" +
                "                                },\n" +
                "                                \"postOptions\": [\n" +
                "                                    {\n" +
                "                                        \"id\": 12126,\n" +
                "                                        \"value\": \"15\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12129,\n" +
                "                                        \"value\": \"10\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12130,\n" +
                "                                        \"value\": \"5\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    }\n" +
                "                                ]\n" +
                "                            },\n" +
                "                            {\n" +
                "                                \"id\": 21,\n" +
                "                                \"display\": true,\n" +
                "                                \"preInterval\": {\n" +
                "                                    \"id\": 12027,\n" +
                "                                    \"min\": 56,\n" +
                "                                    \"minUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"minIsClosed\": false,\n" +
                "                                    \"max\": 60,\n" +
                "                                    \"maxUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"maxIsClosed\": false\n" +
                "                                },\n" +
                "                                \"postOptions\": [\n" +
                "                                    {\n" +
                "                                        \"id\": 12129,\n" +
                "                                        \"value\": \"10\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12130,\n" +
                "                                        \"value\": \"5\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    }\n" +
                "                                ]\n" +
                "                            }\n" +
                "                        ]\n" +
                "                    },\n" +
                "                    {\n" +
                "                        \"id\": 16,\n" +
                "                        \"code\": \"9869\",\n" +
                "                        \"relationships\": [\n" +
                "                            {\n" +
                "                                \"id\": 22,\n" +
                "                                \"display\": true,\n" +
                "                                \"preInterval\": {\n" +
                "                                    \"id\": 12028,\n" +
                "                                    \"min\": 30,\n" +
                "                                    \"minUnit\": {\n" +
                "                                        \"name\": \"天\",\n" +
                "                                        \"value\": 1\n" +
                "                                    },\n" +
                "                                    \"minIsClosed\": false,\n" +
                "                                    \"max\": 35,\n" +
                "                                    \"maxUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"maxIsClosed\": false\n" +
                "                                },\n" +
                "                                \"postOptions\": [\n" +
                "                                    {\n" +
                "                                        \"id\": 12126,\n" +
                "                                        \"value\": \"15\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12127,\n" +
                "                                        \"value\": \"20\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12129,\n" +
                "                                        \"value\": \"10\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12130,\n" +
                "                                        \"value\": \"5\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12128,\n" +
                "                                        \"value\": \"30\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    }\n" +
                "                                ]\n" +
                "                            },\n" +
                "                            {\n" +
                "                                \"id\": 23,\n" +
                "                                \"display\": true,\n" +
                "                                \"preInterval\": {\n" +
                "                                    \"id\": 12029,\n" +
                "                                    \"min\": 36,\n" +
                "                                    \"minUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"minIsClosed\": false,\n" +
                "                                    \"max\": 45,\n" +
                "                                    \"maxUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"maxIsClosed\": false\n" +
                "                                },\n" +
                "                                \"postOptions\": [\n" +
                "                                    {\n" +
                "                                        \"id\": 12126,\n" +
                "                                        \"value\": \"15\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12127,\n" +
                "                                        \"value\": \"20\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12129,\n" +
                "                                        \"value\": \"10\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12130,\n" +
                "                                        \"value\": \"5\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    }\n" +
                "                                ]\n" +
                "                            },\n" +
                "                            {\n" +
                "                                \"id\": 24,\n" +
                "                                \"display\": true,\n" +
                "                                \"preInterval\": {\n" +
                "                                    \"id\": 12030,\n" +
                "                                    \"min\": 46,\n" +
                "                                    \"minUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"minIsClosed\": false,\n" +
                "                                    \"max\": 50,\n" +
                "                                    \"maxUnit\": {\n" +
                "                                        \"name\": \"岁\",\n" +
                "                                        \"value\": 3\n" +
                "                                    },\n" +
                "                                    \"maxIsClosed\": false\n" +
                "                                },\n" +
                "                                \"postOptions\": [\n" +
                "                                    {\n" +
                "                                        \"id\": 12126,\n" +
                "                                        \"value\": \"15\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12129,\n" +
                "                                        \"value\": \"10\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    },\n" +
                "                                    {\n" +
                "                                        \"id\": 12130,\n" +
                "                                        \"value\": \"5\",\n" +
                "                                        \"unit\": {\n" +
                "                                            \"name\": \"年\",\n" +
                "                                            \"value\": 2\n" +
                "                                        }\n" +
                "                                    }\n" +
                "                                ]\n" +
                "                            }\n" +
                "                        ]\n" +
                "                    }\n" +
                "                ],\n" +
                "                \"dataDictionary\": {\n" +
                "                    \"id\": 2,\n" +
                "                    \"name\": \"交费年期\",\n" +
                "                    \"type\": {\n" +
                "                        \"name\": \"选项值\",\n" +
                "                        \"value\": 1\n" +
                "                    },\n" +
                "                    \"withUnit\": true,\n" +
                "                    \"units\": [\n" +
                "                        {\n" +
                "                            \"name\": \"年\",\n" +
                "                            \"value\": 2\n" +
                "                        }\n" +
                "                    ],\n" +
                "                    \"options\": [\n" +
                "                        {\n" +
                "                            \"value\": \"趸交\",\n" +
                "                            \"unit\": null\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"1\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"2\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"3\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"4\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"5\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"6\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"7\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"8\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"9\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"10\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"11\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"12\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"13\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"14\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"15\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"16\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"17\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"18\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"19\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"20\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"21\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"22\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"23\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"24\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"25\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"26\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"27\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"28\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"29\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"30\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"31\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"32\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"33\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"34\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"35\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"36\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"37\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"38\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"39\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"40\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"41\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"42\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"43\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"44\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"45\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"46\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"47\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"48\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"49\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"50\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"51\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"52\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"53\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"54\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"55\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"56\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"57\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"58\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"59\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"60\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"61\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"62\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"63\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"64\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"65\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"66\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"67\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"68\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"69\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"70\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"71\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"72\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"73\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"74\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"75\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"76\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"77\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"78\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"79\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"80\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"81\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"82\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"83\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"84\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"85\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"86\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"87\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"88\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"89\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"90\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"91\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"92\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"93\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"94\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"95\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"96\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"97\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"98\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"99\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        },\n" +
                "                        {\n" +
                "                            \"value\": \"100\",\n" +
                "                            \"unit\": {\n" +
                "                                \"name\": \"年\",\n" +
                "                                \"value\": 2\n" +
                "                            }\n" +
                "                        }\n" +
                "                    ],\n" +
                "                    \"labels\": []\n" +
                "                },\n" +
                "                \"type\": {\n" +
                "                    \"name\": \"单选框\",\n" +
                "                    \"value\": 1\n" +
                "                },\n" +
                "                \"convertUnit\": {\n" +
                "                    \"name\": \"岁\",\n" +
                "                    \"value\": 3\n" +
                "                }\n" +
                "            }\n" +
                "        ]";
        return jsonStr;
    }
}
