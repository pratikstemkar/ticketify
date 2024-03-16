package com.pratikstemkar.ticketify.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pratikstemkar.ticketify.dto.AuthenticationResponse;
import com.pratikstemkar.ticketify.dto.ChangePasswordRequest;
import com.pratikstemkar.ticketify.dto.ProfileResponse;
import com.pratikstemkar.ticketify.model.User;
import com.pratikstemkar.ticketify.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.Principal;

@Service
@RequiredArgsConstructor
public class UserService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public void changePassword(ChangePasswordRequest request, Principal connectedUser) {
        var user = (User) ((UsernamePasswordAuthenticationToken) connectedUser).getPrincipal();
        if(!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            throw new IllegalStateException("Wrong password");
        }
        if(!request.getNewPassword().equals(request.getConfirmationPassword())) {
            throw new IllegalStateException("Passwords are not the same");
        }

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);
    }

    public ProfileResponse getProfile(HttpServletResponse response, HttpServletRequest request) throws IOException {
        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        final String userEmail;
        final String access_token;
        if(authHeader == null || !authHeader.startsWith("Bearer ")) {
            return null;
        }
        access_token = authHeader.substring(7);
        userEmail = jwtService.extractUsername(access_token);
        if(userEmail != null) {
            var user = this.userRepository.findByEmail(userEmail)
                    .orElseThrow();
            if(jwtService.isTokenValid(access_token, user)) {
                return ProfileResponse.builder()
                        .firstName(user.getFirstName())
                        .lastName(user.getLastName())
                        .email(user.getEmail())
                        .avatar(user.getAvatar())
                        .role(String.valueOf(user.getRole()))
                        .build();
            }
        }
        return null;
    }
}
