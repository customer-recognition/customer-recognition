DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE inventory (
    id INT AUTO_INCREMENT NOT NULL,
    item VARCHAR(30),
    price INTEGER,
    PRIMARY KEY (id)
);