const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) =>{
 const Compra = sequelize.define("Compra",
    {
        idCompra: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        idUsuario:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'User',
                key:'idUsuario'
            }
            //foreign key
        },
        Fecha: {
            type: dataTypes.DATEONLY,
            allowNull: false,
        },
        idMedioDePago:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'MedioDePago',
                key:'idMedioDePago'
            }
            //foreign key

        },
        idDetalleCompra:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'DetalleCompra',
                key:'idDetalleCompra'
            }
            //foreign key
        },
        DireccionEntrega: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        idEnvio:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'Envio',
                key:'idTiposdeenvio'
            }
            //foreign key
        },
        Total: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }

    },
    {
        tableName: 'Compras',
        timestamps: false,
    });

    //Relaciones
    //Has many porque podes tener varias lineas del detalle de la compra para una compra
    Compra.associate = (models) => {
    //una compra puede estar en varias lineas de detalle
    Compra.belongsTo(models.DetalleCompra,{
        as: "Detalle_Compra",
        foreignKey:"idDetalleCompra"
    });
    Compra.belongsTo(models.Envio,{
        as: "Envio",
        foreignKey:"idEnvio"
    });
    Compra.belongsTo(models.MedioDePago,{
        as: "Medio de Pago",
        foreignKey:"idMedioDePago"
    });
    Compra.belongsTo(models.User,{
        as: "User",
        foreignKey:"idUsuario"
    });
}
    return Compra;
}

