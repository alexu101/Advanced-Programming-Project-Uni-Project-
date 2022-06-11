package com.example.java.service;

import com.example.java.model.Car;

import java.util.List;
import java.util.Optional;


public interface CarService {
    public Car saveCar(Car car);
    public List<Car> getAllCars();
    public List<Car> getAllCarsUser(int userId);
    public Optional<Car> getCarById(int id);
    public Car delete(int id);
    void saveOrUpdate(Car books);
}
