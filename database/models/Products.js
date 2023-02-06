const Sequelize = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const alias= "Product";
    const cols=
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

    };
    const config=
    {
        tableName: 'Productos',
        timestamps: false,
    };

    const Product = Sequelize.define(alias,cols,config);

    Product.associate = (models) => {
        Product.belongsTo(models.Marca,{
            as: "Marca",
            foreignKey:"idMarcas"
        });
        Product.belongsTo(models.Categoria,{
            as: "Categoria",
            foreignKey:"idCategoria"
        });
        Product.belongsTo(models.Color,{
            as: "Color",
            foreignKey:"idColores"
        });
        Product.belongsTo(models.Talle,{
            as: "Talle",
            foreignKey:"idTalles"
        });
        Product.belongsTo(models.Peso,{
            as: "Peso",
            foreignKey:"idPesos"
        });
        Product.belongsTo(models.Mascota,{
            as: "Mascota",
            foreignKey:"idMascota"
        });
        Product.belongsToMany(models.DetalleCompra,{
            as: "Detalle Compra",
            //Tabla intermedia de la base de datos
            through: "Producto_Compra",
            //Dato del producto en la tabla intermedia
            foreignKey:"idProducto",
            //Dato del detalle de compra en la tabla intermedia
            otherKey: "idDetalleCompra",
            timestamps:false
        });
    }
    return Product;
}