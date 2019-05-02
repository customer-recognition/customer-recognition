INSERT INTO customers(customer_name, customer_email) VALUE("QT", "q@q.com");
INSERT INTO customers(customer_name, customer_email) VALUE("DK", "d@d.com");
INSERT INTO customers(customer_name, customer_email) VALUE("MD", "m@m.com");

INSERT INTO orders(order_name) VALUE("Hamburger");
INSERT INTO orders(order_name) VALUE("Pizza");
INSERT INTO orders(order_name) VALUE("Spaghetti");

INSERT INTO customer_orders(quantity, CustomerId, OrderId) VALUE(1,1,1);
INSERT INTO customer_orders(quantity, CustomerId, OrderId) VALUE(2,2,2);
INSERT INTO customer_orders(quantity, CustomerId, OrderId) VALUE(3,3,3);