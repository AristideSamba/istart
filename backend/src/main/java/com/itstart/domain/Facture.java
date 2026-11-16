package com.itstart.domain;

import jakarta.persistence.*;
import lombok.Data;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
public class Facture {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String numero;
    private String statut; // BROUILLON, ENVOYEE, PAYEE, EN_RETARD
    private BigDecimal montantHt;
    private BigDecimal tva;
    private LocalDate dateEmission;
    private LocalDate dateEcheance;
    @ManyToOne private Client client;
    @ManyToOne private Commande commande;
}
