package com.example.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Models.JwtRequest;
import com.example.Models.JwtResponse;
import com.example.Models.User;
import com.example.Repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class TestController {
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private JwtService jwtservice;
	@Autowired
	private UserRepository ud;
//	@Autowired
//	private PasswordEncoder passwordEncoder;

	@GetMapping("/Helloword_autheticate")
	public String test2() {
		return "This is task_Application authenticated Rest Api ";
	}

	@PostMapping("/authenticate")

	public JwtResponse createJwtToken(@RequestBody JwtRequest jwtrequest) throws Exception {
		
		
			return jwtservice.createJwtToken(jwtrequest);
		

	}

	@PostMapping("/register")

	public User reg(@RequestBody User user) throws Exception {
		String email = user.getUserName();

		User u = ud.findByUserName(email);

		if (u != null) {
			throw new Exception("User Already Exists");
		} else {
			user.setActive(true);
			user.setRoles("USER");
			// user.setPassword(getEncoded(password));
			return ud.save(user);
		}

	}

//	private String getEncoded(String password) {
//
//		return passwordEncoder.encode(password);
//	}

}
