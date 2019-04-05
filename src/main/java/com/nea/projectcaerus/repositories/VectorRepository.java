/*
Project Caerus- By Peter Cresswell

Vector Repository

Used to produce a repository for the vectors
*/
package com.nea.projectcaerus.repositories;

import com.nea.projectcaerus.entity.Vector;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VectorRepository extends JpaRepository<Vector, Long> {
}
