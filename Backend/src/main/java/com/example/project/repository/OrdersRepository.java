package com.example.project.repository;

import com.example.project.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDateTime;
import java.util.List;

public interface OrdersRepository extends JpaRepository<Orders, Long> {

    @Query("SELECT o FROM Orders o WHERE o.orderDate >= :startDateTime AND o.orderDate < :endDateTime")
    List<Orders> findByOrderDateBetween(LocalDateTime startDateTime, LocalDateTime endDateTime);
}
