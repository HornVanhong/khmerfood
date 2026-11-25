CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 1. Categories
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug VARCHAR(100) UNIQUE NOT NULL,
    image_url TEXT,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 2. Category Translations
CREATE TABLE category_translations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    locale VARCHAR(5) NOT NULL CHECK (locale IN ('km', 'en')),
    name VARCHAR(200) NOT NULL,
    description TEXT,
    CONSTRAINT uq_category_locale UNIQUE (category_id, locale)
);

-- 3. Recipes
CREATE TABLE recipes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID NOT NULL REFERENCES categories(id),
    slug VARCHAR(150) UNIQUE NOT NULL,
    main_image_url TEXT,
    preparation_minutes INT NOT NULL DEFAULT 0 CHECK (preparation_minutes >= 0),
    cooking_minutes INT NOT NULL DEFAULT 0 CHECK (cooking_minutes >= 0),
    servings INT NOT NULL DEFAULT 1 CHECK (servings > 0),
    difficulty VARCHAR(20) NOT NULL DEFAULT 'EASY' CHECK (difficulty IN ('EASY', 'MEDIUM', 'HARD')),
    status VARCHAR(20) NOT NULL DEFAULT 'DRAFT' CHECK (status IN ('DRAFT', 'PUBLISHED')),
    is_featured BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4. Recipe Translations
CREATE TABLE recipe_translations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recipe_id UUID NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
    locale VARCHAR(5) NOT NULL CHECK (locale IN ('km', 'en')),
    name VARCHAR(200) NOT NULL,
    description TEXT,
    CONSTRAINT uq_recipe_locale UNIQUE (recipe_id, locale)
);

-- 5. Ingredients
CREATE TABLE ingredients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    image_url TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 6. Ingredient Translations
CREATE TABLE ingredient_translations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ingredient_id UUID NOT NULL REFERENCES ingredients(id) ON DELETE CASCADE,
    locale VARCHAR(5) NOT NULL CHECK (locale IN ('km', 'en')),
    name VARCHAR(200) NOT NULL,
    CONSTRAINT uq_ingredient_locale UNIQUE (ingredient_id, locale)
);

-- 7. Recipe Ingredients
CREATE TABLE recipe_ingredients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recipe_id UUID NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
    ingredient_id UUID NOT NULL REFERENCES ingredients(id),
    quantity NUMERIC(10, 2),
    unit VARCHAR(50),
    display_order INT NOT NULL DEFAULT 0,
    CONSTRAINT uq_recipe_ingredient UNIQUE (recipe_id, ingredient_id)
);

-- 8. Recipe Steps
CREATE TABLE recipe_steps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    recipe_id UUID NOT NULL REFERENCES recipes(id) ON DELETE CASCADE,
    step_number INT NOT NULL CHECK (step_number > 0),
    image_url TEXT,
    CONSTRAINT uq_recipe_step_number UNIQUE (recipe_id, step_number)
);

-- 9. Step Translations
CREATE TABLE step_translations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    step_id UUID NOT NULL REFERENCES recipe_steps(id) ON DELETE CASCADE,
    locale VARCHAR(5) NOT NULL CHECK (locale IN ('km', 'en')),
    instruction TEXT NOT NULL,
    CONSTRAINT uq_step_locale UNIQUE (step_id, locale)
);

-- Indexes
CREATE INDEX idx_recipes_category ON recipes(category_id);
CREATE INDEX idx_recipes_status ON recipes(status);
CREATE INDEX idx_recipes_created ON recipes(created_at DESC);
CREATE INDEX idx_recipes_featured ON recipes(is_featured);
CREATE INDEX idx_recipe_translations_recipe ON recipe_translations(recipe_id);
CREATE INDEX idx_recipe_translations_lookup ON recipe_translations(recipe_id, locale);
CREATE INDEX idx_recipe_translations_name ON recipe_translations(name);
CREATE INDEX idx_ingredient_translations_lookup ON ingredient_translations(ingredient_id, locale);
CREATE INDEX idx_ingredient_translations_name ON ingredient_translations(name);
CREATE INDEX idx_recipe_ingredients_recipe ON recipe_ingredients(recipe_id, display_order);
CREATE INDEX idx_recipe_steps_recipe ON recipe_steps(recipe_id, step_number);
