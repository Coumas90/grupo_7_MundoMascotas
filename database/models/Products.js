const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Product = Sequelize.define("Product",
    {
        idProductos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        Nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Precio:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        Descuento:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        idMarcas:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        idCategoria:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        idColor:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        idTalle:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        idPesos:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        idMascota:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        tableName: 'Productos',
        timestamps: false,
    }
    );
    Product.associate = function(models){
        Product.belongsTo(models.Marca,{
            as: "Marca",
            foreignKey:"idMarcas"
        });
    }
    
    Product.associate = function(models){
        Product.belongsTo(models.Categoria,{
            as: "Categoria",
            foreignKey:"idCategoria"
        });
    }
    
    Product.associate = function(models){
        Product.belongsTo(models.Color,{
            as: "Color",
            foreignKey:"idColores"
        });
    }
    
    Product.associate = function(models){
        Product.belongsTo(models.Talle,{
            as: "Talle",
            foreignKey:"idTalles"
        });
    }
    
    Product.associate = function(models){
        Product.belongsTo(models.Peso,{
            as: "Peso",
            foreignKey:"idPesos"
        });
    }
    Product.associate = function(models){
        Product.belongsTo(models.Mascota,{
            as: "Mascota",
            foreignKey:"idMascota"
        });
    }
    
    Product.associate = function(models){
        Product.belongsToMany(models.DetalleCompra,{
            as: "Detalle Compra",
            //Tabla intermedia de la base de datos
            through: "Product_Compra",
            //De esta tabla
            foreignKey:"idProductos",
            otherKey: "idDetalleCompra",
            timestamps:false
        });
    }
    return Product;
}