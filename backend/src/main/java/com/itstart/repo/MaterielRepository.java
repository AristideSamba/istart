package com.itstart.repo;

import com.itstart.domain.Materiel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "materiels")
public interface MaterielRepository extends JpaRepository<Materiel, Long> {}
