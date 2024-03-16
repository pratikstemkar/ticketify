package com.pratikstemkar.ticketify.repository;

import com.pratikstemkar.ticketify.model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
    Optional<Movie> findById(int id);
    Optional<Movie> findByTitle(String title);

}
