package com.example.project.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // <-- use lowercase 'id'

    private String name;
    private String description;
    private double price;
    private int rating;
    private String image;
    // add image, etc. if needed
}
