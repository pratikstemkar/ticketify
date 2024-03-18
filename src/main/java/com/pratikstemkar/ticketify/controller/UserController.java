package com.pratikstemkar.ticketify.controller;

import com.pratikstemkar.ticketify.dto.ChangePasswordRequest;
import com.pratikstemkar.ticketify.dto.ProfileResponse;
import com.pratikstemkar.ticketify.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.security.Principal;

@RestController
@RequestMapping("/api/v1/users")
@RequiredArgsConstructor
@CrossOrigin
public class UserController {
    private final UserService userService;

    @PatchMapping
    public ResponseEntity<?> changePassword(
            @RequestBody ChangePasswordRequest request,
            Principal connectedUser
    ) {
        userService.changePassword(request, connectedUser);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<ProfileResponse> getProfile(HttpServletRequest request,
                                                      HttpServletResponse response) throws IOException {
        return ResponseEntity.ok(userService.getProfile(request, response));
    }
}
