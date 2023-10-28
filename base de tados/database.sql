CREATE DATABASE companydb;

USE companydb;

create Table
    empleados (
        id INT(11) NOT NULL auto_increment,
        nombre VARCHAR(50) DEFAULT NULL,
        salario INT(5) DEFAULT NULL,
        PRIMARY KEY (id)
    );

INSERT INTO empleados
VALUES (1, 'Juan', 3000), (2, 'Pedro', 4000), (3, 'María', 5000);