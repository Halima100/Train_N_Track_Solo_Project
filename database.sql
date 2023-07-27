
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "client_accounts" (
    "client_id" SERIAL PRIMARY KEY,
    "user_id" VARCHAR (80) UNIQUE NOT NULL,
    "client_name" VARCHAR (80),
    "client_goals" TEXT NOT NULL,
    "client_image" VARCHAR(120) NOT NULL
);

INSERT INTO "client_accounts" ( "user_id","client_name", "client_goals", "client_image")
VALUES 
(1,'KIM','../Kim_Possible_(character_design).png');