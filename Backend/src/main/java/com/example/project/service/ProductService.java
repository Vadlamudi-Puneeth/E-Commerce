package com.example.project.service;

import com.example.project.model.Product;
import com.example.project.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    public ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(Long id){
        return productRepository.findById(id);
    }

    public Optional<Product> getProductByName(String name){
        return productRepository.findByName(name);
    }

    public Product createProduct(Product product){
        return productRepository.save(product);
    }

    public boolean deleteProductById(Long id){
        if(productRepository.existsById(id)){
            productRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public boolean deleteProductByName(String name) {
        if (productRepository.existsByName(name)) {
            productRepository.deleteByName(name);
            return true;
        }
        return false;
    }




}
