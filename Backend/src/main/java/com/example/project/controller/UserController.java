package com.example.project.controller;

import com.example.project.model.User;
import com.example.project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    public UserService userService;

    @CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:5500"})
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user){
        if(user.getEmail() == null || user.getFullName() == null || user.getPassword() == null){
            return ResponseEntity.badRequest().body("Missing Required Fields");
        }
        User created = userService.createUser(user);
        Map<String, Object> response = new HashMap<>();
        response.put("message","user successfully created");
        response.put("user", created.getEmail());
        return ResponseEntity.status(201).body(response);
    }


    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = userService.getAllUsers();
        users.forEach(u -> u.setPassword(null));
        return ResponseEntity.ok(users);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getElementById(@PathVariable Long id){
        return userService.getUserById(id)
                .map(u -> { u.setPassword(null); return ResponseEntity.ok(u); })
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
