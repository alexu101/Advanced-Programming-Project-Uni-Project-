package com.example.java.service;

import com.example.java.model.User;
import com.example.java.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.*;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user){
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }

    @Override
    public User delete(int id) {
        userRepository.deleteById(id);

        String url = "jdbc:postgresql://localhost:5432/";
        String user = "postgres";
        String password = "password";

        try (Connection con = DriverManager.getConnection(url, user, password);
             Statement st = con.createStatement();
             ResultSet rs = st.executeQuery("ALTER SEQUENCE user_id_seq RESTART INCREMENT BY 1 ")) {

            if (rs.next()) {
                System.out.println(rs.getString(1));
            }

        } catch (SQLException ex) {

            ex.printStackTrace();
        }

        return null;
    }

    @Override
    public void saveOrUpdate(User books) {
    }

    @Override
    public User signupUser(User user) {
        List<User> registeredUsers = userRepository.findAll();
        for(int index =0;index< registeredUsers.size();index++){
            if(registeredUsers.get(index).getEmail().equals(user.getEmail())) {
                return null;
            }
        }
        return userRepository.save(user);
    }

    @Override
    public Optional<User> signinUser(User user) {
        List<User> registeredUsers = userRepository.findAll();
        for(int index =0;index< registeredUsers.size();index++){
            System.out.println(registeredUsers.get(index).getEmail());
            System.out.println(registeredUsers.get(index).getPassword());
            if(registeredUsers.get(index).getEmail()!=null&&registeredUsers.get(index).getPassword()!=null)
            if(registeredUsers.get(index).getEmail().equals(user.getEmail()) &&
                    registeredUsers.get(index).getPassword().equals(user.getPassword())) {
                return userRepository.findById(registeredUsers.get(index).getId());
            }
        }
        return null;
    }
}
