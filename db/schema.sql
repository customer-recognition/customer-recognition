DROP DATABASE IF EXISTS restaurant_db;
CREATE DATABASE restaurant_db;
USE restaurant_db;

CREATE TABLE customers
(
    ID SERIAL PRIMARY KEY,
    customer_name VARCHAR(256),
    customer_purchases INT,
);

CREATE TABLE orders
(
    ID SERIAL PRIMARY KEY,
    order_name VARCHAR(256),
    order_price INT,
    order_customer INT,
    FOREIGN KEY (order_customer) REFERENCES customers(ID)
);

CREATE TABLE users
(
    ID SERIAL PRIMARY KEY,
    username VARCHAR(256),
    PASSWORD VARCHAR(256),
);