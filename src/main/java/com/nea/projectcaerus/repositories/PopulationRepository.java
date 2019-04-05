/*
Project Caerus- By Peter Cresswell

Population Repository

Used to produce a repository for the populations
*/
package com.nea.projectcaerus.repositories;

import com.nea.projectcaerus.entity.Population;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PopulationRepository extends JpaRepository<Population, Long> {
}
