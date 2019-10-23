CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    name TEXT,
    about TEXT
);

CREATE TABLE IF NOT EXISTS images (
    id SERIAL PRIMARY KEY,
    url TEXT,
    recipe_id INTEGER
);

CREATE TABLE IF NOT EXISTS ingredients (
    id SERIAL PRIMARY KEY,
    name TEXT,
    measurement TEXT,
    amount FLOAT
);

CREATE TABLE IF NOT EXISTS instructions (
    id SERIAL PRIMARY KEY,
    description TEXT,
    recipe_id INTEGER
);

CREATE TABLE IF NOT EXISTS ingredient_type (
    id SERIAL PRIMARY KEY,
    name TEXT,
    ingredient_id TEXT
);

CREATE TABLE IF NOT EXISTS recipe_ingredients (
    id SERIAL PRIMARY KEY,
    recipe_id INTEGER,
    ingredient_id INTEGER
);


