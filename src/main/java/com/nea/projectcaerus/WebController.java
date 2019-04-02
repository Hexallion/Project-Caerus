package com.nea.projectcaerus;

import com.nea.projectcaerus.entity.Demonstration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class WebController {
    @Autowired
    private DemoService demoService;

    @RequestMapping(value = "/saveResults", method = RequestMethod.POST, consumes = MediaType.ALL_VALUE)
    public ResponseEntity<String> saveResults(@RequestBody Demonstration demonstration) {
        return demoService.saveResults(demonstration);
    }

    @RequestMapping(value = "/viewResult/{id}")
    public ResponseEntity<Demonstration> viewResult(@PathVariable Long id) {
        try {
            Demonstration result = demoService.viewResult(id);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
