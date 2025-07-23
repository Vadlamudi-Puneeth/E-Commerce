package com.example.project.repository;

import com.example.project.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

    List<Payment> findByStatus(String status);

    @Query("SELECT p FROM Payment p WHERE DATE(p.date) = :date")
    List<Payment> findByDate(@Param("date") Date date);

}
