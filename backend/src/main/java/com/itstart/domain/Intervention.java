package com.itstart.domain;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
public class Intervention {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    @Column(length = 2000) private String description;
    private String statut; // PLANIFIEE, EN_COURS, TERMINEE
    private LocalDateTime datePrevue;
    @ManyToOne private Client client;
    @ManyToOne private Technicien technicien;
    @ManyToOne private Materiel materiel;
}
