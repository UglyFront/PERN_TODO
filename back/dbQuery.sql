CREATE DATABASE todo_api; 

CREATE TABLE todo_api(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    checked boolean default false
);


INSERT INTO todo_api(name) VALUES(*value*);

DELETE FROM todo_api WHERE id = *id*;

UPDATE todo_api SET checked = true WHERE id = *id*;