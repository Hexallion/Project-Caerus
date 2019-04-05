/*
Project Caerus- By Peter Cresswell

Demo Service

The service which is linked to the end points of the server. Essentially is the brain of the server and is used to carry out requests made.
*/
package com.nea.projectcaerus;

import com.nea.projectcaerus.entity.Demonstration;
import com.nea.projectcaerus.repositories.DemonstrationsRepository;
import com.nea.projectcaerus.repositories.PopulationRepository;
import com.nea.projectcaerus.repositories.SettingsRepository;
import com.nea.projectcaerus.repositories.VectorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DemoService {
    //Connects the repositories to the service
    @Autowired
    public DemonstrationsRepository demonstrationsRepository;
    @Autowired
    public SettingsRepository settingsRepository;
    @Autowired
    public PopulationRepository populationRepository;
    @Autowired
    public VectorRepository vectorRepository;

    //Method for saving a demonstration to the repository
    public ResponseEntity<String> saveResults(Demonstration demonstration) {
        demonstrationsRepository.saveAndFlush(demonstration);
        System.out.println("Saved demo with id: " + demonstration.getId());
        return new ResponseEntity<>(demonstration.getId().toString(), HttpStatus.ACCEPTED);
    }

    //Method for returning a demo depending on the id given
    public Demonstration viewResult(Long id) throws Exception {
        Optional<Demonstration> demonstration = demonstrationsRepository.findById(id);
        if(demonstration.isPresent()) {
            /*System.out.println(demonstrationsRepository.findById(id).getClass());
            System.out.println(demonstrationsRepository.findById(id));*/
            return demonstration.get();
        } else {
            throw new Exception("No demo found for id: " + id);
        }
    }

    //Method for returning a page object depending on the page number. Used for displaying a list of previously run demonstrations.
    public Page<Demonstration> viewDemos(int pageNumber){
        Pageable pageable = PageRequest.of(pageNumber, 10);
        Page<Demonstration> pageList = demonstrationsRepository.findAll(pageable);
        System.out.println(pageList);
        return pageList;
    }
}
