package com.galaxy.repository;

import com.galaxy.entity.PersonInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonRepository extends JpaRepository<PersonInfo, Long> {
}
