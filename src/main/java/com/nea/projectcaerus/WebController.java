package com.nea.projectcaerus;
import com.nea.projectcaerus.entity.Settings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.RequestEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class WebController {
    @Autowired
    DemoService demoService;

    /*
    @GetMapping("/hello")
    public String hello(){
        //asjkdh
        return "helloPage";
    }
    */

    @RequestMapping(value = "/saveResults", method = RequestMethod.POST)
    public RequestEntity<String> saveResults(@RequestBody Settings settings) {
        demoService.saveSettings(settings);
        return null;
    }


}
