CREATE DATABASE orders;

USE orders;

CREATE TABLE orderInfo
(
  id int NOT NULL
  AUTO_INCREMENT,
  fullname int NOT NULL,
  text varchar
  (200)  NOT NULL,
  email varchar
  (254),
  PRIMARY KEY
  (ID)
);