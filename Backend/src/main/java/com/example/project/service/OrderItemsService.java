package com.example.project.service;

import com.example.project.model.OrderItem;
import com.example.project.repository.OrderItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderItemsService {

    @Autowired
    private OrderItemsRepository orderItemsRepository;

    public OrderItem createOrderItem(OrderItem orderItem) {
        return orderItemsRepository.save(orderItem);
    }

    public Optional<OrderItem> getOrderItemById(Long id) {
        return orderItemsRepository.findById(id);
    }

    public List<OrderItem> getAllOrderItems() {
        return orderItemsRepository.findAll();
    }

    public boolean deleteOrderItemById(Long id) {
        if (orderItemsRepository.existsById(id)) {
            orderItemsRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
