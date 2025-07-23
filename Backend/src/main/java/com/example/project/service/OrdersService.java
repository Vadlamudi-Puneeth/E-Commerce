package com.example.project.service;

import com.example.project.model.Orders;
import com.example.project.repository.OrdersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import com.example.project.model.OrderItem;
import com.example.project.model.Product;
import com.example.project.repository.ProductRepository;
import java.util.ArrayList;

@Service
public class OrdersService {

    @Autowired
    private OrdersRepository ordersRepository;

    @Autowired
    private ProductRepository productRepository;

    public Orders createOrder(Orders order) {
        // Save the order first (without items)
        List<OrderItem> items = order.getItems();
        order.setItems(new ArrayList<>()); // temporarily clear items
        Orders savedOrder = ordersRepository.save(order);

        // For each item, set the order and fetch the product
        for (OrderItem item : items) {
            Product product = productRepository.findById(item.getProduct().getId())
                .orElseThrow(() -> new RuntimeException("Product not found: " + item.getProduct().getId()));
            item.setOrder(savedOrder);
            item.setProduct(product);
        }
        // Save all items
        savedOrder.setItems(items);
        ordersRepository.save(savedOrder); // save again with items

        return savedOrder;
    }

    public Optional<Orders> getOrderById(Long id) {
        return ordersRepository.findById(id);
    }

    public List<Orders> getAllOrders() {
        return ordersRepository.findAll();
    }

    public List<Orders> getOrdersByDate(LocalDate date) {
        LocalDateTime startOfDay = date.atStartOfDay();
        LocalDateTime endOfDay = date.plusDays(1).atStartOfDay();
        return ordersRepository.findByOrderDateBetween(startOfDay, endOfDay);
    }
}
