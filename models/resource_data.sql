DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;

\c library_db;

CREATE TABLE lib_resources (
	ID SERIAL PRIMARY KEY,
	title VARCHAR,
	subject VARCHAR,
	link VARCHAR,
	likes INTEGER
);

INSERT INTO lib_resources (title, subject, link, likes)
	VALUES('SQL DATE', 'SQL', 'https://www.w3schools.com/sql/sql_dates.asp', 0);