DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE customers
(
    ID INT NOT NULL AUTO_INCREMENT,
    customer_name VARCHAR(256),
    customer_purchases INT,
    PRIMARY KEY(ID)
);

CREATE TABLE orders
(
    ID INT NOT NULL AUTO_INCREMENT,
    order_name VARCHAR(256),
    order_price INT,
    order_customer INT,
    PRIMARY KEY(ID),
    FOREIGN KEY (order_customer) REFERENCES customers(id)
);

CREATE TABLE users
(
    ID SERIAL PRIMARY KEY,
    username VARCHAR(256),
    PASSWORD VARCHAR(256)
);