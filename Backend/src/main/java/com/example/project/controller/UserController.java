package com.example.project.controller;

import com.example.project.model.User;
import com.example.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    public UserService userService;

    @PostMapping("/users")
    public ResponseEntity<?> createUser(@RequestBody User user){
        System.out.println("User received: " + user);

        if(user.getEmail() == null || user.getFullName() == null || user.getPassword() == null){
            return ResponseEntity.badRequest().body("Missing Required Fields");
        }

        User created = userService.createUser(user);

        Map<String, Object> response = new HashMap<>();
        response.put("message","user successfully created");
        response.put("user",created);

        return ResponseEntity.status(201).body(response);
    }


    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getElementById(@PathVariable Long id){
        return userService.getUserById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id){
        if (userService.deleteUserById(id)) {
            return ResponseEntity.ok("User deleted successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
