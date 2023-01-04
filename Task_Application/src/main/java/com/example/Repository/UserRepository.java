package com.example.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.Models.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUserName(String userName);

	User findByUserNameAndPassword(String userName, String password);

}
