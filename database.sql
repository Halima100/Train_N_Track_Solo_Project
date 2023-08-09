
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
    "id" SERIAL PRIMARY KEY,
    "user_id" VARCHAR (80) NOT NULL,
     "client_name" VARCHAR(80) NOT NULL,
    "client_goals" TEXT NOT NULL,
    "client_image"  VARCHAR(1200) NOT NULL
);
INSERT INTO "client_accounts" ("user_id", "client_name", "client_goals", "client_image")
VALUES 
(1,'Kim','improve upper boy strength','images/Kim_possible_(character_design).png');



CREATE TABLE "workouts" (
    "id" SERIAL PRIMARY KEY,
    "client_id" VARCHAR (80) NOT NULL,
     "date" VARCHAR(80) NOT NULL,
    "workout" VARCHAR (2000) NOT NULL,
    "sets" INTEGER,
    "repetition" INTEGER,
    "weight" INTEGER,
    "comment"TEXT NOT NULL
    
);
INSERT INTO "workouts" ("client_id", "date", "workout", "sets", "repetition", "weight", "comment")
VALUES 
(1,'07-05-23','Dumbbell Bench Press','3', '12', '20', 'Great form and power  ');
