package com.nea.projectcaerus;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.nea.projectcaerus.Repositorys.DemonstrationsRepository;
import com.nea.projectcaerus.entity.Demonstration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class DemoService {

    @Autowired
    DemonstrationsRepository demonstrationsRepository;

    public ResponseEntity<String> saveResults(Demonstration demonstration) {
        demonstrationsRepository.save(demonstration);
        System.out.println(demonstrationsRepository.findAll());
        Gson gson = new Gson();
        //System.out.println(gson.toJson(demonstrationsRepository.findAll()));
        //JsonObject obj = new JsonObject();
        //obj.addProperty("status", "Accepted");

        return new ResponseEntity<String>(gson.toJson(demonstrationsRepository.findById(demonstration.id)).toString(), HttpStatus.ACCEPTED);
    }
}
