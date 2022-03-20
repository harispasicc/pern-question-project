CREATE DATABASE pernquestion;

create table users(
    user_id serial not null primary key,
    email varchar(255) unique not null,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    password varchar(255) not null,
    created_at date default current_date
    
);  

CREATE TABLE question(
    question_id SERIAL NOT NULL PRIMARY KEY,
    description VARCHAR(255)
);





