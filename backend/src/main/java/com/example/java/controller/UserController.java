package com.example.java.controller;

import com.example.java.model.User;
import com.example.java.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public String add(@RequestBody User user){
        userService.saveUser(user);
        return "New user added";
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/getUser/{userId}")
    public Optional<User> getUsers(@PathVariable int userId){
        return userService.getUserById(userId);
    }

    @DeleteMapping("/user/{userId}")
    private String deleteUser(@PathVariable("userId") int userId)
    {
        userService.delete(userId);
        return "User deleted!";
    }

    @PutMapping("/users")
    private User update(@RequestBody User users)
    {
        userService.saveOrUpdate(users);
        return users;
    }

    @PostMapping("/api/signup")
    public ResponseEntity<Object> signup(@RequestBody User user){
        if(userService.signupUser(user)==null)
            return new ResponseEntity<>("user already exist", HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>("signed up", HttpStatus.OK);
    }

    @CrossOrigin
    @PostMapping("/api/signin")
    public ResponseEntity<Object> signin(@RequestBody User user){
        if(userService.signinUser(user)==null)
            return new ResponseEntity<>("invalid credentials", HttpStatus.INTERNAL_SERVER_ERROR);

        return new ResponseEntity<>(userService.signinUser(user), HttpStatus.OK);
    }
}

