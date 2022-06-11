package com.example.java.model;

import lombok.*;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "car")
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String model;
    private String color;
    private String cylinderCapacity;
    private String vehicleClass;
    private String carBodyType;
    private Integer fabricationYear;
    private Integer userId;
}
