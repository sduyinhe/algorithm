package com.galaxy.service.impl;

import cn.afterturn.easypoi.cache.manager.POICacheManager;
import cn.afterturn.easypoi.excel.ExcelExportUtil;
import cn.afterturn.easypoi.excel.ExcelXorHtmlUtil;
import cn.afterturn.easypoi.excel.entity.ExcelToHtmlParams;
import cn.afterturn.easypoi.excel.entity.ExportParams;
import cn.afterturn.easypoi.excel.export.styler.ExcelExportStylerBorderImpl;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.galaxy.easypoi.HomeCustomizationEntity;
import com.galaxy.entity.PersonInfo;
import com.galaxy.entity.InternalUser;
import com.galaxy.entity.SysArea;
import com.galaxy.entity.SysAreaDto;
import com.galaxy.mail.ApplicationEntity;
import com.galaxy.mail.EmailDto;
import com.galaxy.mail.EmailUtil;
import com.galaxy.repository.AreaRepository;
import com.galaxy.repository.IUserRepository;
import com.galaxy.repository.PersonRepository;
import com.galaxy.service.PersonService;
import com.google.common.collect.Lists;
import lombok.extern.slf4j.Slf4j;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
@CacheConfig(cacheNames = {"user"})
public class PersonServiceImpl implements PersonService {

    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private ApplicationEntity applicationEntity;
    @Autowired
    private AreaRepository areaRepository;

    @Override
    public PersonInfo queryById(Integer id) {
        try {
            PersonInfo result = personRepository.findById(id.longValue()).get();
            log.info(result.toString());
            return result;
        } catch (Exception e) {
            log.info(e.toString(), e);
        }
        return null;
    }

    @Cacheable(value = "algorithmUser1", key = "targetClass.name+#p0", condition = "true")
    public InternalUser findByUserId(Integer id) {
        InternalUser result = userRepository.findById(id.longValue()).get();
        return result;
    }

    @CacheEvict(value = "algorithmUser1", key = "targetClass.name+#p0")
    public void cacheEvictUserId(Integer id) {
        log.info("清空指定用户id={}的缓存成功", id);
    }

    @CachePut(value = "algorithmUser1", key = "targetClass.name+#p0")
    public InternalUser updateUser(Integer id) {
        InternalUser result = userRepository.findById(id.longValue()).get();
        result.setUpdateTime(LocalDateTime.now());
        userRepository.save(result);
        return result;
    }

    @Transactional
    public void testSave() {
        LocalDateTime now = LocalDateTime.now();
        PersonInfo result = new PersonInfo();
        result.setAddress("山大华康31");
        result.setCreateTime(now);

        InternalUser user = userRepository.findById(61L).get();
        user.setAccount("sdu0013");

        System.out.println(user.toString());
        user.setPersonInfo(result);
        user.setCreateTime(now);

//
//
//        userRepository.save(user);
//
//
//        InternalUser user2 = new InternalUser();
//        user2.setAccount("sdu0022");
//        user2.setPersonInfo(result);
//        user2.setCreateTime(now);
//        userRepository.save(user2);
    }

    @Transactional
    public void testSave2() {
        LocalDateTime now = LocalDateTime.now();

//
//        InternalUser user = userRepository.findById(61L).get();
//        user.setAccount("sdu0013");
//        user.setCreateTime(now);

        //userRepository.save(user);


        InternalUser user2 = new InternalUser();
        //user2.setId(65L);
        user2.setAccount("sdu0023");
        user2.setCreateTime(now);
        //InternalUser user2_ =userRepository.save(user2);

        PersonInfo result = new PersonInfo();
        result.setName("杨浩文测试啊");
        result.setAddress("山大华康");
        result.setCreateTime(now);
        List<InternalUser> internalUserList = Arrays.asList(user2);
        result.setInternalUserList(internalUserList);
        personRepository.save(result);
        System.out.println("保存完毕之后的id是" + result.getId());
    }

    @Transactional
    public void testDelete(Long id) {
        LocalDateTime now = LocalDateTime.now();
        PersonInfo personInfo = personRepository.findById(id).get();
        List list = personInfo.getInternalUserList();
        list.removeAll(list);
        personRepository.save(personInfo);
        // InternalUser internalUser1 = userRepository.findById(internalUser.getId()).get();
        //personRepository.deleteById((long) id);
        //userRepository.deleteById(internalUser.getId());
        //userRepository.delete(internalUser1);
    }

    @Transactional
    public void testDeleteUser(Integer id) {
        LocalDateTime now = LocalDateTime.now();

        userRepository.deleteById((long) id);
    }

    public void sendEmail() throws IOException, InvalidFormatException {
        HomeCustomizationEntity homeCustomizationEntity = new HomeCustomizationEntity();
        String str = "{\n" +
                "    \"mobile\":\"17092166516\",\n" +
                "    \"name\":\"赵思捷\",\n" +
                "    \"communicationDate\":\"2019-09-27\",\n" +
                "    \"communicationTimeRange\":\"10:00-11:00\",\n" +
                "    \"areaName\":\"上海市\",\n" +
                "    \"familyComposition\":\"单亲已婚\",\n" +
                "    \"gender\":\"男\",\n" +
                "    \"birthday\":\"2019-09-22\",\n" +
                "    \"socialInsurance\":\"有\",\n" +
                "    \"income\":\"10万收入以下\",\n" +
                "    \"spouseBirthday\":\"1998-10-22\",\n" +
                "    \"childCount\":\"3个\",\n" +
                "    \"firstGender\":\"男\",\n" +
                "    \"firstBirthday\":\"2019-08-22\",\n" +
                "    \"secondGender\":\"女\",\n" +
                "    \"secondBirthday\":\"2019-07-23\",\n" +
                "    \"thirdGender\":\"男\",\n" +
                "    \"thirdBirthday\":\"2018-03-22\"\n" +
                "}";
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            homeCustomizationEntity = objectMapper.readValue(str, HomeCustomizationEntity.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        homeCustomizationEntity.setFormDate(new Date());
        ArrayList<HomeCustomizationEntity> arrayList = new ArrayList<>();
        arrayList.add(homeCustomizationEntity);
        ExportParams exportParams = new ExportParams();
        exportParams.setStyle(ExcelExportStylerBorderImpl.class);

        Workbook workbook = ExcelExportUtil.exportExcel(exportParams,
                HomeCustomizationEntity.class, arrayList);
        workbook.getSheetAt(0).createFreezePane(0, 0);
        FileOutputStream fos = new FileOutputStream("F:/algorithm/test112.xlsx");
        workbook.write(fos);
        fos.close();


        ExcelToHtmlParams params = new ExcelToHtmlParams(WorkbookFactory.create(POICacheManager.getFile("F:/algorithm/test112.xlsx")));
        System.out.println(ExcelXorHtmlUtil.excelToHtml(params));
        String htmlStr = "<div style=\"font-family: Arial;font-size: 10pt;\">" + homeCustomizationEntity.getMobile() + "该用户已填写表单；</div>" + ExcelXorHtmlUtil.excelToHtml(params);
        EmailDto emailDto = new EmailDto();
        emailDto.setSubject(homeCustomizationEntity.getMobile() + "已填表单");
        emailDto.setContent(htmlStr);
        emailDto.setRecipient("yanghw@cheche365.com");

        EmailUtil.sendAttachmentMail(emailDto, applicationEntity);
    }

    public void testArea() {
        //SysArea sysArea=new SysArea();
        List<SysArea> sysAreas = areaRepository.findByTypeIn(Lists.newArrayList(0));
//        sysAreas.forEach(area->{
//            List<SysArea> childrenList = areaRepository.findByParentId(area.getId());
//            area.setChildren(childrenList);
//        });
        System.out.println(sysAreas);
        List<SysAreaDto> sysAreaDtoList = new ArrayList<>();
        sysAreas.forEach(area -> {
            SysAreaDto tmpSysAreaDto = new SysAreaDto();
            tmpSysAreaDto.setLabel(area.getName());
            tmpSysAreaDto.setValue(area.getCode());
            List<SysArea> childrenList = areaRepository.findByParentId(area.getId());
            List<SysAreaDto> childrenSysAreaDtoList = new ArrayList<>();
            if (childrenList != null && childrenList.size() > 0) {
                childrenList.forEach(childrenArea -> {
                    SysAreaDto tmpChildrenArea = new SysAreaDto();
                    tmpChildrenArea.setLabel(childrenArea.getName());
                    tmpChildrenArea.setValue(childrenArea.getCode());
                    childrenSysAreaDtoList.add(tmpChildrenArea);
                });
                tmpSysAreaDto.setChildren(childrenSysAreaDtoList);
            }

            sysAreaDtoList.add(tmpSysAreaDto);
        });

        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String str = objectMapper.writeValueAsString(sysAreaDtoList);
            System.out.println(str);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }
}






























