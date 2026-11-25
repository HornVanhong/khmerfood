package com.khmerfood.repository;

import com.khmerfood.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface CategoryRepository extends JpaRepository<Category, UUID> {
    List<Category> findByActiveTrueOrderByCreatedAtAsc();
    Optional<Category> findBySlugAndActiveTrue(String slug);
}
