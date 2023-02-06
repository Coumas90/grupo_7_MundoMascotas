const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) =>{
 const DetalleCompra = sequelize.define("Detalle Compra",
    {
        idDetalleCompra: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        idProducto_Compra:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'ProductoCompra',
                key:'idProducto_Compra'
            }
            //foreign key
        },
        Cantidad: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        idCompra:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'Compra',
                key:'idCompra'
            }
            //foreign key

        },
        Precio:{
            type: dataTypes.DECIMAL,
            allowNull: false,
        }

    },
    {
        tableName: 'Detalle Compra',
        timestamps: false,
    });

    DetalleCompra.associate = (models) => {
        // cada linea de detalle pertenece a una sola venta
        DetalleCompra.belongsTo(models.Compra,{
            as:"Compra",
            foreignKey: "idCompra"
        });
        DetalleCompra.belongsToMany(models.Product,{
            as: "Product",
            through: "Producto_Compra",
            foreignKey:"idDetalleCompra",
            otherKey: "idProducto",
            timestamps:false
        });
    }
    
    return DetalleCompra;
}

