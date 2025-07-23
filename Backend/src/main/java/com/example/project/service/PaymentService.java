package com.example.project.service;

import com.example.project.model.Payment;
import com.example.project.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PaymentService {

    @Autowired
    public PaymentRepository paymentRepository;

    public Optional<Payment> getPaymentById(Long id) {
        return paymentRepository.findById(id);
    }

    public List<Payment> getPaymentsByStatus(String status) {
        return paymentRepository.findByStatus(status);
    }

    public List<Payment> getPaymentsByDate(Date date) {
        return paymentRepository.findByDate(date);
    }

    public Payment savePayment(Payment payment) {
        return paymentRepository.save(payment);
    }
}
