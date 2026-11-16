package com.itstart.repo;

import com.itstart.domain.Intervention;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "interventions")
public interface InterventionRepository extends JpaRepository<Intervention, Long> {}
