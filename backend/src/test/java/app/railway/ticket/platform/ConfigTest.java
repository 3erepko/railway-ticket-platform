package app.railway.ticket.platform;

import app.railway.ticket.platform.domain.Dummy;
import app.railway.ticket.platform.domain.DummyController;
import app.railway.ticket.platform.domain.DummyRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(DummyController.class)
@ExtendWith(SpringExtension.class)
class ConfigTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DummyRepository dummyRepository;

    @Test
    void testDummyController() throws Exception {
        Dummy dummy = new Dummy();
        dummy.setId(1L);
        dummy.setName("Kruci Gang");
        Mockito.when(dummyRepository.findById(1L)).thenReturn(Optional.of(dummy));

        mockMvc.perform(get("/dummy/{id}", 1L)).andExpect(status().isOk())
                                                                   .andExpect(jsonPath("$.id", is(1)));
    }

}
