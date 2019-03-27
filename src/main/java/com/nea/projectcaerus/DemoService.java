package com.nea.projectcaerus;

import com.google.gson.JsonObject;
import com.nea.projectcaerus.Repositorys.DemonstrationsRepository;
import com.nea.projectcaerus.Repositorys.SettingsRepository;
import com.nea.projectcaerus.entity.Demonstration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class DemoService {

    @Autowired
    DemonstrationsRepository demonstrationsRepository;
    SettingsRepository settingsRepository;

    public ResponseEntity<String> saveResults(Demonstration demonstration) {
        //demonstration.DemoId = "";
        //demonstrationsRepository.save(demonstration);

        System.out.println(demonstration.toString());
        //Gson gson = new Gson();
        //System.out.println(gson.toJson(demonstration));

        JsonObject obj = new JsonObject();
        obj.addProperty("status", "Accepted");

        return new ResponseEntity<String>(obj.toString(), HttpStatus.ACCEPTED);
    }
}
