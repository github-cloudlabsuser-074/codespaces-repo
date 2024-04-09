-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Insert data into the products table
INSERT INTO products (product_id, product_name, price) VALUES
    (1, 'Apple', 1.99),
    (2, 'Banana', 0.99),
    (3, 'Orange', 2.49),
    (4, 'Grapes', 3.99),
    (5, 'Pineapple', 4.99);