const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Product = sequelize.define("Product",
    {
        idProductos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        Nombre:{
            type: DataTypes.VARCHAR(200),
            allowNull: false,
        },
        Descripcion: {
            type: DataTypes.VARCHAR(500),
            allowNull: false,
        },
        Precio:{
            type: DataTypes.VARCHAR(45),
            allowNull: false,
        },
        Descuento:{
            type: DataTypes.VARCHAR(45),
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
        }

    },
    {
        tableName: 'Productos',
        timestamps: false,
    }
    );
    return Product;
}

Product.associate = function(models){
    Product.belongsTo(models.Marca,{
        as: "Marca",
        foreignKey:"idMarcas"
    });
}

Product.associate = function(models){
    Product.belongsTo(models.Categoria,{
        as: "Categoria",
        foreignKey:"idCategorias"
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
        foreignKey:"idMascotas"
    });
}

Product.associate = function(models){
    Product.belongsToMany(models.DetalleCompra,{
        as: "Compra",
        through: "Product_Compra",
        foreignKey:"id",
        otherKey: "Nose",
        timestamps:false
    });
}