package com.khmerfood.repository;

import com.khmerfood.entity.Recipe;
import com.khmerfood.entity.enums.RecipeStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, UUID> {

    Page<Recipe> findByStatus(RecipeStatus status, Pageable pageable);

    Optional<Recipe> findBySlugAndStatus(String slug, RecipeStatus status);

    List<Recipe> findByFeaturedTrueAndStatus(RecipeStatus status);

    Page<Recipe> findByCategorySlugAndStatus(String categorySlug, RecipeStatus status, Pageable pageable);

    @Query("SELECT DISTINCT r FROM Recipe r " +
           "JOIN r.translations t " +
           "WHERE r.status = :status " +
           "AND LOWER(t.name) LIKE LOWER(CONCAT('%', :term, '%'))")
    Page<Recipe> searchRecipes(@Param("term") String term, @Param("status") RecipeStatus status, Pageable pageable);

    long countByCategorySlugAndStatus(String categorySlug, RecipeStatus status);
}
