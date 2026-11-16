package com.itstart.repo;

import com.itstart.domain.Technicien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "techniciens")
public interface TechnicienRepository extends JpaRepository<Technicien, Long> {}
