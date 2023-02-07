const Sequelize = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const alias= "Product";
    const cols=
    {
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        discount:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        id_brand:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        id_category:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        id_color:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        id_size:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        id_weight:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        id_pet:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'products',
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