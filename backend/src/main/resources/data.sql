-- Solo para h2 DEBE DESCOMENTARLO
--
-- insert into Image(id,description,url) values(1,'description','url');
-- insert into Image(id,description,url) values(2,'description2','url2');




-- ----------------------------------------------------------
-- MYSQL LO QUE DEBE CORRER EN LA BASE MYSQL
-- ----------------------------------------------------------

-- drop database approyect;
-- create database approyect;
-- use approyect;
--
-- --------------------------------- --------
-- -- -- TABLES
-- -- ---------------------------------------
-- CREATE TABLE Product (
--                          id VARCHAR(100) PRIMARY KEY,
--                          name VARCHAR(100) NOT NULL,
--                          description VARCHAR(500) NOT NULL,
--                          url VARCHAR(100) NOT NULL
-- );
--
-- --------------------------------- --------
-- -- -- PROCEDURES
-- -- ---------------------------------------
--
-- delimiter //
-- CREATE PROCEDURE searchByKeyWords(IN keyWord VARCHAR(255))
-- BEGIN
-- SELECT * FROM image WHERE description LIKE CONCAT('%', keyWord, '%');
-- END//