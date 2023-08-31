
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

CREATE TABLE "client_images" (
 "id" SERIAL PRIMARY KEY,
 "image_name" VARCHAR(80) NOT NULL,
  "client_image"  VARCHAR(1200) NOT NULL
  
);
INSERT INTO "client_images" ("image_name", "client_image")
VALUES 
('Image 1','https://images.unsplash.com/photo-1580835239846-5bb9ce03c8c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJvYm90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60');
('Image 2', 'https://images.unsplash.com/photo-1589254066213-a0c9dc853511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvYm90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')
('Image 3',	'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cm9ib3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60')
('Image 4',	'https://images.unsplash.com/photo-1673107270721-90bd1fabb6c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHJvYm90JTIwc3Ryb25nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60')