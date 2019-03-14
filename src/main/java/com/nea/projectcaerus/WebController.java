package com.nea.projectcaerus;
import org.springframework.beans.factory.annotation.Autowired;
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
}
