package com.nea.projectcaerus.Repositorys;

import com.nea.projectcaerus.entity.Demonstration;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface DemonstrationsRepository extends JpaRepository<Demonstration, Long> {
    //List<Demonstration> findAllByIdExists();
}
