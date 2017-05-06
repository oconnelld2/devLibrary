DROP DATABASE IF EXISTS library_db;
CREATE DATABASE libary_db;

\c library_db;

CREATE TABLE resources (
	ID SERIAL PRIMARY KEY,
	title VARCHAR,
	subject VARCHAR,
	link VARCHAR,
	likes INTEGER
);

INSERT INTO resources (title, subject, link, likes)
	VALUES('SQL DATE', 'SQL', 'https://www.w3schools.com/sql/sql_dates.asp', 0);