CREATE TABLE `mundo_mascotas`.`Categorias` (
  `idCategorias` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombreCategoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategorias`));
  
  CREATE TABLE `mundo_mascotas`.`Marcas` (
  `idMarcas` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombreMarca` VARCHAR(80) NOT NULL,
  PRIMARY KEY (`idMarcas`));
  
  CREATE TABLE `mundo_mascotas`.`Colores` (
  `idColores` INT ZEROFILL UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombreColor` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idColores`));
  
  CREATE TABLE `mundo_mascotas`.`Pesos` (
  `idPesos` INT NOT NULL AUTO_INCREMENT,
  `nombrePeso` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPesos`));
  
  CREATE TABLE `mundo_mascotas`.`Talles` (
  `idTalles` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `NombreTalla` VARCHAR(45) NULL,
  PRIMARY KEY (`idTalles`));
  
  CREATE TABLE `mundo_mascotas`.`Mascotas` (
  `idMascotas` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `NombreMascota` VARCHAR(45) NULL,
  PRIMARY KEY (`idMascotas`));
  
  CREATE TABLE `mundo_mascotas`.`Medios de pago` (
  `idMedios de pago` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Medios de pagocol` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idMedios de pago`));
  
  CREATE TABLE `mundo_mascotas`.`Tipos de envio` (
  `idTipos de envio` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `NombreTipoDeEnvio` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idTipos de envio`));
  
  CREATE TABLE `mundo_mascotas`.`Users Categories` (
  `idUsers Categories` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `NombreCategoriaUsuario` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsers Categories`));
  
  CREATE TABLE `mundo_mascotas`.`Users` (
  `idUsuarios` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `Email` VARCHAR(100) NOT NULL,
  `Nombre` VARCHAR(100) NOT NULL,
  `Apellido` VARCHAR(100) NOT NULL,
  `Documento de identidad` VARCHAR(45) NOT NULL,
  `Telefono` VARCHAR(45) NOT NULL,
  `Avatar` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `idUsers Categories` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idUsuarios`),
  INDEX `idUsers Categories_idx` (`idUsers Categories` ASC),
  CONSTRAINT `idUsers Categories`
    FOREIGN KEY (`idUsers Categories`)
    REFERENCES `mundo_mascotas`.`Users Categories` (`idUsers Categories`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    ALTER TABLE `mundo_mascotas`.`Pesos` 
CHANGE COLUMN `idPesos` `idPesos` INT(11) UNSIGNED NOT NULL AUTO_INCREMENT ;

CREATE TABLE `Productos` (
  `idProductos` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(200) NOT NULL,
  `Descripcion` varchar(500) NOT NULL,
  `idMarcas` int(10) unsigned NOT NULL,
  `idCategoria` int(10) unsigned NOT NULL,
  `Precio` varchar(45) NOT NULL,
  `Descuento` varchar(45) NOT NULL,
  `idColor` int(10) unsigned NOT NULL,
  `idTalle` int(10) unsigned NOT NULL,
  `idPesos` int(10) unsigned NOT NULL,
  `idMascota` int(10) unsigned NOT NULL,
  PRIMARY KEY (`idProductos`),
  KEY `idMarcas_idx` (`idMarcas`),
  KEY `idCategoria_idx` (`idCategoria`),
  KEY `idColor_idx` (`idColor`),
  KEY `idTalle_idx` (`idTalle`),
  KEY `idMascota_idx` (`idMascota`),
  KEY `idPesos_idx` (`idPesos`),
  CONSTRAINT `idCategoria` FOREIGN KEY (`idCategoria`) REFERENCES `Categorias` (`idCategorias`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idColor` FOREIGN KEY (`idColor`) REFERENCES `Colores` (`idColores`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idMarcas` FOREIGN KEY (`idMarcas`) REFERENCES `Marcas` (`idMarcas`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idMascota` FOREIGN KEY (`idMascota`) REFERENCES `Mascotas` (`idMascotas`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idPesos` FOREIGN KEY (`idPesos`) REFERENCES `Pesos` (`idPesos`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idTalle` FOREIGN KEY (`idTalle`) REFERENCES `Talles` (`idTalles`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ;


CREATE TABLE `mundo_mascotas`.`Detalle Compra` (
  `idDetalle Compra` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idProducto` INT UNSIGNED NOT NULL,
  `Cantidad` INT NOT NULL,
  `idCompra` INT UNSIGNED NOT NULL,
  `Precio` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idDetalle Compra`),
  INDEX `idCompra_idx` (`idCompra` ASC),
  CONSTRAINT `idProducto`
    FOREIGN KEY ()
    REFERENCES `mundo_mascotas`.`Productos` ()
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idCompra`
    FOREIGN KEY (`idCompra`)
    REFERENCES `mundo_mascotas`.`Compra` (`idCompra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    CREATE TABLE `mundo_mascotas`.`Detalle Compra` (
  `idDetalle Compra` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `idProducto` INT UNSIGNED NOT NULL,
  `Cantidad` INT NOT NULL,
  `idCompra` INT UNSIGNED NOT NULL,
  `Precio` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idDetalle Compra`),
  INDEX `idCompra_idx` (`idCompra` ASC),
  INDEX `idProducto_idx` (`idProducto` ASC),
  CONSTRAINT `idProducto`
    FOREIGN KEY (`idProducto`)
    REFERENCES `mundo_mascotas`.`Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idCompra`
    FOREIGN KEY (`idCompra`)
    REFERENCES `mundo_mascotas`.`Compra` (`idCompra`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
    ALTER TABLE `mundo_mascotas`.`Compra` 
ADD INDEX `idDetalle Compra_idx` (`idDetalle Compra` ASC);
;
ALTER TABLE `mundo_mascotas`.`Compra` 
ADD CONSTRAINT `idDetalle Compra`
  FOREIGN KEY (`idDetalle Compra`)
  REFERENCES `mundo_mascotas`.`Detalle Compra` (`idDetalle Compra`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;