package com.example.project.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "payment")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long paymentId;

    public double amount;

    public LocalDateTime date;

    public String method;

    public String status;

}
