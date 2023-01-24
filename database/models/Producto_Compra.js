const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const ProductoCompra = sequelize.define("ProductoCompra",
    {
        idProducto_Compra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        idDetalleCompra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        idProducto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        }

    },
    {
        tableName: 'Detalle_Compra',
        timestamps: false,
    }
    );
    return Peso;
}

ProductoCompra.associate = function (models){
    Peso.hasMany(models.Product,{
        as:"Product",
        foreignkey: "idPesos"
    })
}