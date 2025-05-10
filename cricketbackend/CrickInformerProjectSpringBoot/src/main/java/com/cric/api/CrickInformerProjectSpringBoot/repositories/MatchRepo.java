package com.cric.api.CrickInformerProjectSpringBoot.repositories;

import com.cric.api.CrickInformerProjectSpringBoot.entities.Match;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MatchRepo extends JpaRepository<Match,Integer> {
// match fetch karna chahta hoon
   // provide teamHeading

   Optional<Match> findByTeamHeading(String teamHeading);




}
