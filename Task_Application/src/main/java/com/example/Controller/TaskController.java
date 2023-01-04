package com.example.Controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Models.Task;
import com.example.Repository.TaskRepository;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/taskcontrol")
public class TaskController {
	@Autowired
	TaskRepository td;

	@RequestMapping("/Helloword")
	public String test() {
		return "This is task_Application Rest Api";
	}

	@PostMapping("/addtask")
	public Task addtask(@RequestBody Task task) {
		Task savetask = td.save(task);
		return savetask;
	}

	@GetMapping("/reminder/{userid}")
	public List<Task> sendtask(@PathVariable("userid") int id) {

		Date date = Calendar.getInstance().getTime();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		String strDate = dateFormat.format(date);
		List<Task> lt = new ArrayList<>();
		lt = td.findByUseridAndSdate(id, strDate);
		return lt;
	}
	@GetMapping("/task/{taskid}")
	public Task sendtask1(@PathVariable("taskid") int id) {

	
		return td.findById(id).get();
	
	}

	@GetMapping("/tasklist/{userid}")
	public List<Task> sendtasklist(@PathVariable("userid") int id) {

		List<Task> lt = new ArrayList<>();
		lt = td.findByUserid(id);
		return lt;
	}

	@GetMapping("/deletetask/{taskid}")
	public void deletetask(@PathVariable("taskid") int taskid) {
		td.deleteById(taskid);
	}

	@PutMapping("/updatetask")
	public Task updatetask(@RequestBody Task task) {
		Task update = td.save(task);
		return update;
	}

	@GetMapping("/getbystatus/{id}/{status}")
	public List<Task> getbystatus(@PathVariable("id") int id, @PathVariable("status") String st) {
		List<Task> lt = new ArrayList<>();
		lt = td.findByUseridAndStatus(id, st);
		return lt;

	}
}
