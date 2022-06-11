
package com.example.java.controller;

import com.example.java.model.Car;
import com.example.java.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/car")
public class CarController {
    @Autowired
    private CarService carService;

    @PostMapping("/add")
    public String add(@RequestBody Car car){
        carService.saveCar(car);
        return "New car added";
    }

    @GetMapping("/getAll")
    public List<Car> getAllCars(){
        return carService.getAllCars();
    }

    @GetMapping("/getAll/{userId}")
    public List<Car> getAllCars(@PathVariable int userId){
        return carService.getAllCarsUser(userId);
    }

    @GetMapping("/getCar/{carId}")
    public Optional<Car> getCars(@PathVariable int carId){
        return carService.getCarById(carId);
    }

    @DeleteMapping("/car/{carId}")
    private String deleteCar(@PathVariable("carId") int carId)
    {
        carService.delete(carId);
        return "Car deleted!";
    }

    @PutMapping("/cars")
    private Car update(@RequestBody Car cars)
    {
        carService.saveOrUpdate(cars);
        return cars;
    }
}
