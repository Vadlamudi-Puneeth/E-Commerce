package com.example.project.repository;

import com.example.project.model.OrderItem;
import com.example.project.model.Orders;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface OrderItemsRepository extends JpaRepository<OrderItem, Long> {

}
