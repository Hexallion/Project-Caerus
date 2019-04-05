/*
Project Caerus- By Peter Cresswell

Demonstration Repository

Used to produce a repository for the demonstrations
*/
package com.nea.projectcaerus.repositories;

import com.nea.projectcaerus.entity.Demonstration;
import org.springframework.data.jpa.repository.JpaRepository;


public interface DemonstrationsRepository extends JpaRepository<Demonstration, Long> {
}
