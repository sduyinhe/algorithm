package com.galaxy.repository;

import com.galaxy.entity.SysArea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AreaRepository extends JpaRepository<SysArea, Long> {
    List<SysArea> findByTypeIn(List<Integer> typeList);
    List<SysArea> findByParentId(Long parentId);
}
