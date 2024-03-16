package com.pratikstemkar.ticketify.service;

import com.pratikstemkar.ticketify.model.Movie;
import com.pratikstemkar.ticketify.repository.MovieRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MovieService {
    private final MovieRepository movieRepository;


}
