package com.galaxy.repository;

import com.galaxy.entity.InternalUser;
import org.springframework.data.repository.CrudRepository;

public interface IUserRepository extends CrudRepository<InternalUser, Long> {
}
