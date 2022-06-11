package com.example.java.service;

import com.example.java.model.Car;
import com.example.java.repository.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.logging.Logger;

@Service
@RequiredArgsConstructor
@Transactional
public class CarServiceImpl implements CarService{

    @Autowired
    private CarRepository carRepository;

    @Override
    public Car saveCar(Car car){
        return carRepository.save(car);
    }

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @Override
    public List<Car> getAllCarsUser(int userId) {
        List<Car> allCars= carRepository.findAll();
        List<Car> thisUsersCars= new ArrayList<>();
        for(int index=0;index<allCars.size();index++)
            if(allCars.get(index).getUserId()!=null)
            if(allCars.get(index).getUserId()==userId)
                thisUsersCars.add(allCars.get(index));
        return thisUsersCars;
    }

    @Override
    public Optional<Car> getCarById(int id) {
        return carRepository.findById(id);
    }

    @Override
    public Car delete(int id) {
        carRepository.deleteById(id);

        String url = "jdbc:postgresql://localhost:5432/";
        String user = "postgres";
        String password = "password";

        try (Connection con = DriverManager.getConnection(url, user, password);
             Statement st = con.createStatement();
             ResultSet rs = st.executeQuery("ALTER SEQUENCE car_id_seq RESTART INCREMENT BY 1 ")) {

            if (rs.next()) {
                System.out.println(rs.getString(1));
            }

        } catch (SQLException ex) {

            ex.printStackTrace();
        }

        return null;
    }

    @Override
    public void saveOrUpdate(Car books) {
    }

}
