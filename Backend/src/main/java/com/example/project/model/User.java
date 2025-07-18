package com.example.project.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long user_id;

    @NotBlank(message = "Full name has to be mention")
    @Size(min = 4, max = 20)
    public String fullName;

    @Email
    public String email;

    public String password;

    public String cfpassword;

    @Column(name = "address")
    public String address;

    public String phoneno;

}
