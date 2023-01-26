const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const DetalleCompra = Sequelize.define("DetalleCompra",
    {
        idDetalleCompra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        idProducto:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        Cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idCompra:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key

        },
        Precio:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        }

    },
    {
        tableName: 'Detalle Compra',
        timestamps: false,
    }
    );
    DetalleCompra.associate = function (models){
        DetalleCompra.hasMany(models.Compra,{
            as:"Compra",
            foreignkey: "idDetalleCompra"
        })
    }
    
    DetalleCompra.associate = function(models){
        DetalleCompra.belongsToMany(models.Product,{
            as: "Product",
            through: "Product_Compra",
            foreignKey:"idProducto",
            otherKey: "Nose",
            timestamps:false
        });
    }
    return DetalleCompra;
}

