package com.itstart.domain;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
public class Materiel {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String reference;
    private String designation;
    private String numeroSerie;
    private String statut; // STOCK, DEPLOYE, EN_PANNE
    @ManyToOne private Client client;
}
