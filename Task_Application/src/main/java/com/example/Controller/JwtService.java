package com.example.Controller;

import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.access.prepost.PostFilter;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.Models.JwtRequest;
import com.example.Models.JwtResponse;
import com.example.Models.MyUserDetails;
import com.example.Models.User;
import com.example.Repository.UserRepository;
import com.example.Service.JwtUtil;

@Component
public class JwtService {
	@Autowired
	private JwtUtil jwtutil;
	@Autowired
	private AuthenticationManager authenticationManager;
	@Autowired
	private UserRepository userrepo;
//	@Autowired
//	
//	MyUserDetails myUserDetails;
	
	public JwtResponse createJwtToken(JwtRequest jwtrequest) throws Exception {
		String userName = jwtrequest.getUserName();
		String password = jwtrequest.getPassword();

		try {
			
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, password));

		} catch (Exception ex) {
		}

		String newGeneratedToken = jwtutil.generateToken(userName);
		User user = userrepo.findByUserNameAndPassword(userName, password);
		if (user != null) {
			return new JwtResponse(user, newGeneratedToken);
		}
		return null;
	}
}
