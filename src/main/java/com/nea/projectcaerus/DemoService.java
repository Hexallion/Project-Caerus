package com.nea.projectcaerus;

import com.nea.projectcaerus.entity.Demonstration;
import com.nea.projectcaerus.entity.Dot;
import com.nea.projectcaerus.entity.Population;
import com.nea.projectcaerus.entity.Vector;
import com.nea.projectcaerus.repositories.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DemoService {

    @Autowired
    public DemonstrationsRepository demonstrationsRepository;
    @Autowired
    public SettingsRepository settingsRepository;
    @Autowired
    public PopulationRepository populationRepository;
    @Autowired
    public DotRepository dotRepository;
    @Autowired
    public VectorRepository vectorRepository;

    public ResponseEntity<String> saveResults(Demonstration demonstration) {
        System.out.println("Saving demo with id: " + demonstration.getId());
        demonstrationsRepository.save(demonstration);
        for(Population population: demonstration.getPopulations()){
            population.setDemo(demonstration);
            populationRepository.save(population);
            for(Dot dot: population.getDots()){
                dot.setPopulation(population);
                dotRepository.save(dot);
                for(Vector vector: dot.getDna()){
                    vector.setDot(dot);
                    vectorRepository.save(vector);
                }
                System.out.println("Finished saving vectors");
            }
            System.out.println("Finished saving population");
        }
        System.out.println("Finished saving all populations");
        demonstration.getSettings().setDemo(demonstration);
        settingsRepository.save(demonstration.getSettings());
        //System.out.println(demonstrationsRepository.findAll());

        //System.out.println(demonstrationsRepository.findById(demonstration.getId()).getClass());
        //System.out.println(demonstrationsRepository.findById(demonstration.getId()));

        System.out.println("Finished saving Demo");
        return new ResponseEntity<>(demonstration.getId().toString(), HttpStatus.ACCEPTED);
    }

    public Demonstration viewResult(Long id) throws Exception {
        Optional<Demonstration> demonstration = demonstrationsRepository.findById(id);
        if(demonstration.isPresent()) {
            System.out.println(demonstrationsRepository.findById(id).getClass());
            System.out.println(demonstrationsRepository.findById(id));
            return demonstration.get();
        } else {
            throw new Exception("No demo found for id: " + id);
        }
    }
}
