package com.itstart.domain;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
public class Commande {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numero;
    private String statut; // NOUVELLE, EN_COURS, LIVREE, ANNULEE
    private BigDecimal montant;
    private LocalDate dateCommande;
    @ManyToOne private Client client;
}
