package ${controllerPackage}.${prefix}.rest;

import ${basePackage}.BaseIntDocTest;
import ${controllerPackage}.${prefix}.request.${modelName}CreateRequest;
import ${controllerPackage}.${prefix}.request.${modelName}UpdateRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Test;
import com.jayway.jsonpath.JsonPath;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
* Created by ${author} on ${date}.
*/
@Transactional
public class ${modelName}ControllerIntTest extends BaseIntDocTest {

    @Autowired
    private ObjectMapper objectMapper;

    private static final String uri = "/${modelNameLowerCamel}s";

    @Test
    public void testSave() throws Exception {
        save();
    }

    @Test
    public void testGet() throws Exception {
        int id = save();
        this.mockMvc.perform(get(uri + "/{id}", id).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void testGetAll() throws Exception {
        //request
        int id = save();
        //result
        this.mockMvc.perform(get(uri).accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    public void testUpdate() throws Exception {
        //request
        int id = save();
        ${modelName}UpdateRequest request = new ${modelName}UpdateRequest();
        //result
        this.mockMvc.perform(put(uri + "/{id}", id).contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isNoContent());
    }

    @Test
    public void testDelete() throws Exception {
        //request
        int id = save();
        //result
        this.mockMvc.perform(delete(uri + "/{ids}", id).contentType(MediaType.APPLICATION_JSON))
            .andExpect(status().isNoContent());
    }

    private int save() throws Exception {
        //request
        ${modelName}CreateRequest request = createRandomRequest();
        //result
        MvcResult mvcResult = this.mockMvc.perform(post(uri).contentType(MediaType.APPLICATION_JSON).content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isCreated()).andReturn();
        return JsonPath.read(mvcResult.getResponse().getContentAsString(), "$.data.id");
    }

    private ${modelName}CreateRequest createRandomRequest() {
        return new ${modelName}CreateRequest();
    }
}