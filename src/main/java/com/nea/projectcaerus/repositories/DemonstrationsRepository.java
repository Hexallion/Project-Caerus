package com.nea.projectcaerus.repositories;

import com.nea.projectcaerus.entity.Demonstration;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DemonstrationsRepository extends JpaRepository<Demonstration, Long> {
    //List<Demonstration> findAllByIdExists();
}
