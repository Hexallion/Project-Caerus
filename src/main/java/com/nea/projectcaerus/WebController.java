package com.nea.projectcaerus;

import com.nea.projectcaerus.entity.Settings;

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
    public ResponseEntity<String> saveResults(@RequestBody Settings settings){
        String type = settings.getClass().getTypeName();

        JsonObject obj = new JsonObject();
        obj.addProperty("status", "Accepted");
        System.out.println(settings);

        return new ResponseEntity<String>(obj.toString(), HttpStatus.ACCEPTED);
    }


}
