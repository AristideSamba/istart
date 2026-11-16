package com.itstart.repo;

import com.itstart.domain.Commande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "commandes")
public interface CommandeRepository extends JpaRepository<Commande, Long> {}
