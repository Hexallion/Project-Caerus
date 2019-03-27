package com.nea.projectcaerus;

import com.google.gson.Gson;
import com.nea.projectcaerus.entity.Demonstration;
import com.nea.projectcaerus.entity.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import com.google.gson.JsonObject;

@Controller
public class WebController {
    @Autowired
    private DemoService demoService;

    @RequestMapping(value = "/saveResults", method = RequestMethod.POST)
    public ResponseEntity<String> saveResults(@RequestBody Demonstration demonstration){
        return saveResults(demonstration);
    }


}
