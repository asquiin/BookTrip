CREATE TABLE package (
    id SERIAL PRIMARY KEY,
    from_location VARCHAR(255) NOT NULL,
    destination VARCHAR(255) NOT NULL,
    travel_date DATE NOT NULL
);
