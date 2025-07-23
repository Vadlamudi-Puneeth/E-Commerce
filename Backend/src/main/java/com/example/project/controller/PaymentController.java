package com.example.project.controller;

import com.example.project.model.Payment;
import com.example.project.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Autowired
    public PaymentService paymentService;

    @GetMapping("/payments/id/{id}")
    public ResponseEntity<?> getPaymentById(@PathVariable Long id) {
        return paymentService.getPaymentById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/payments")
    public ResponseEntity<?> savePayment(@RequestBody Payment payment) {
        if (payment.getAmount() <= 0
                || payment.getDate() == null
                || payment.getMethod() == null
                || payment.getStatus() == null) {
            return ResponseEntity.badRequest().body("Missing or invalid fields");
        }

        Payment savedPayment = paymentService.savePayment(payment);
        return ResponseEntity.status(201).body(savedPayment);
    }

    @GetMapping("/payments/status/{status}")
    public ResponseEntity<?> getPaymentsByStatus(@PathVariable String status) {
        return ResponseEntity.ok(paymentService.getPaymentsByStatus(status));
    }

    @GetMapping("/payments/date/{date}")
    public ResponseEntity<?> getPaymentsByDate(@PathVariable String date) {
        try {
            java.sql.Date sqlDate = java.sql.Date.valueOf(date);
            return ResponseEntity.ok(paymentService.getPaymentsByDate(sqlDate));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest()
                    .body("Invalid date format. Use yyyy-MM-dd");
        }
    }

}
