package com.example.project.controller;

import com.example.project.model.Orders;
import com.example.project.service.OrdersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class OrdersController {

    @Autowired
    private OrdersService ordersService;

    @PostMapping("/orders")
    public ResponseEntity<?> createOrder(@RequestBody Orders order) {
        if (order.getOrderStatus() == null || order.getAmount() <= 0) {
            return ResponseEntity.badRequest().body("Missing or invalid fields");
        }

        order.setOrderDate(LocalDateTime.now());
        Orders savedOrder = ordersService.createOrder(order);
        return ResponseEntity.status(201).body(savedOrder);
    }

    @GetMapping("/orders/id/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable Long id) {
        return ordersService.getOrderById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/orders/date/{date}")
    public ResponseEntity<?> getOrdersByDate(@PathVariable String date) {
        try {
            LocalDate localDate = LocalDate.parse(date);
            List<Orders> orders = ordersService.getOrdersByDate(localDate);
            return ResponseEntity.ok(orders);
        } catch (DateTimeParseException e) {
            return ResponseEntity.badRequest().body("Invalid date format. Use yyyy-MM-dd");
        }
    }

    @GetMapping("/orders")
    public ResponseEntity<List<Orders>> getAllOrders() {
        return ResponseEntity.ok(ordersService.getAllOrders());
    }
}
