BEGIN;

-- Suppression des tables existantes pour réinitialiser la base de données
DROP TABLE IF EXISTS "table example", "table example", CASCADE;

CREATE TABLE example (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL DEFAULT 'admin'
);

COMMIT;