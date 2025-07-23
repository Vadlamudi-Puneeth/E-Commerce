package com.example.project.controller;

import com.example.project.model.OrderItem;
import com.example.project.service.OrderItemsService;
import com.example.project.service.OrderItemsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order-items")
public class OrderItemsController {

    @Autowired
    private OrderItemsService orderItemsService;

    @PostMapping
    public ResponseEntity<?> createOrderItem(@RequestBody OrderItem orderItem) {
        if (orderItem.getQuantity() <= 0 || orderItem.getPrice() <= 0) {
            return ResponseEntity.badRequest().body("Missing or invalid fields");
        }
        OrderItem saved = orderItemsService.createOrderItem(orderItem);
        return ResponseEntity.status(201).body(saved);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderItemById(@PathVariable Long id) {
        return orderItemsService.getOrderItemById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
