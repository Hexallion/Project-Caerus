/*
Project Caerus- By Peter Cresswell

WebController

Controls all of the endpoints for the server, calling DemoService when needed.
Default endpoint automatically serves up index.html in resources static folder
*/
package com.nea.projectcaerus;

import com.nea.projectcaerus.entity.Demonstration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
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
    //Connects demoservice to the controller
    @Autowired
    private DemoService demoService;

    //Mapping for saving results, result is passed in as JSON and is returned to the client.
    @RequestMapping(value = "/saveResults", method = RequestMethod.POST, consumes = MediaType.ALL_VALUE)
    public ResponseEntity<String> saveResults(@RequestBody Demonstration demonstration) {
        return demoService.saveResults(demonstration);
    }

    //Mapping for viewing specific demonstration based on id. id is given as a path variable
    @RequestMapping(value = "/viewResult/{id}")
    public ResponseEntity<Demonstration> viewResult(@PathVariable Long id) {
        //Try Catch incase demo with id does not exist!
        try {
            Demonstration result = demoService.viewResult(id);
            return ResponseEntity.ok(result);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //Mapping for getting page of demos. Page number is given as a path variable.
    @RequestMapping(value = "/viewDemos/{pageNumber}")
    public ResponseEntity<Page<Demonstration>> viewDemos(@PathVariable int pageNumber) {
        return ResponseEntity.ok(demoService.viewDemos(pageNumber));
    }
}
