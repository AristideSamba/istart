package com.itstart.repo;

import com.itstart.domain.ContactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "contact-messages")
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {}
