package com.example.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.Models.Task;
import com.example.Models.User;

public interface TaskRepository extends JpaRepository<Task, Integer> {

	List<Task> findByUserid(int id);

	List<Task> findByUseridAndSdate(int id, String strDate);

	void deleteByTaskid(int taskid);
	// List<Task> findByStatus(String st);

	List<Task> findByUseridAndStatus(int id, String st);

}
