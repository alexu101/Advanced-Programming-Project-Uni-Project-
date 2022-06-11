package com.example.java.service;

import com.example.java.model.User;

import java.util.List;
import java.util.Optional;


public interface UserService {
    public User saveUser(User user);
    public List<User> getAllUsers();
    public Optional<User> getUserById(int id);
    public User delete(int id);
    void saveOrUpdate(User books);
    public User signupUser(User user);
    public Optional<User> signinUser(User user);
}
