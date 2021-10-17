CREATE TABLE USUARIO
(
	id INT(10) AUTO_INCREMENT,
    nombre_completo VARCHAR(100) NOT NULL,
    contrasena VARCHAR(50) NOT NULL,
    correo VARCHAR(70) NOT NULL,
    telefono VARCHAR(15) NOT NULL,
	PRIMARY KEY(id)
);
CREATE TABLE PRODUCTOS
(
    codigo INT(6) PRIMARY KEY,
    descripcion VARCHAR(20) NOT NULL,
	cantidad INT(9) NOT NULL,
	marca VARCHAR(70) NOT NULL,
	creador_id INT(10) NOT NULL,
    FOREIGN KEY (creador_id) REFERENCES USUARIO(id)
);
