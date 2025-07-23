package com.example.project.controller;

import com.example.project.model.Product;
import com.example.project.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    public ProductService productService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts(){
        return ResponseEntity.ok(productService.getAllProducts());
    }

    @PostMapping("/products")
    public ResponseEntity<?> createProducts(@RequestBody Product product){
        if(product.getName() == null || product.getDescription() == null){
            return ResponseEntity.badRequest().body("Missing Required fields");
        }

        Product created = productService.createProduct(product);

        Map<String,Object> response = new HashMap<>();
        response.put("message","product successfully added");
        response.put("product",created);

        return ResponseEntity.status(201).body(response);
    }

    @GetMapping("/products/name/{name}")
    public ResponseEntity<?> getProductsByName(@PathVariable String name){
        return productService.getProductByName(name)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/products/id/{id}")
    public ResponseEntity<?> getProductById(@PathVariable Long id){
        return productService.getProductById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/products/id/{id}")
    public ResponseEntity<?> deleteProductsById(@PathVariable Long id){
        if (productService.deleteProductById(id)) {
            return ResponseEntity.ok().body("Product deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/products/name/{name}")
    public ResponseEntity<?> deleteProductsByName(@PathVariable String name){
        if (productService.deleteProductByName(name)) {
            return ResponseEntity.ok().body("Product deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
