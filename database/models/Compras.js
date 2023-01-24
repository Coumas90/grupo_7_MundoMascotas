const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Compra = sequelize.define("Compra",
    {
        idCompra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        idUsuario:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        Fecha: {
            type: DataTypes.DATETIME,
            allowNull: false,
        },
        idMedioDePago:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key

        },
        idDetalleCompra:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        DireccionEntrega:{
            type: DataTypes.VARCHAR(200),
            allowNull: false,
        },
        idEnvio:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        }

    },
    {
        tableName: 'Compras',
        timestamps: false,
    }
    );
    return Compra;
}

//Has many porque podes tener varias lineas del detalle de la compra para una compra
Compra.associate = function(models){
    Compra.hasMany(models.DetalleCompra,{
        as: "Detalle Compra",
        foreignKey:"idDetalleCompra"
    });
}

Compra.associate = function(models){
    Compra.belongsTo(models.Envio,{
        as: "Envio",
        foreignKey:"idEnvio"
    });
}
Compra.associate = function(models){
    Compra.belongsTo(models.MedioDePago,{
        as: "Medio de Pago",
        foreignKey:"idMedioDePago"
    });
}

Compra.associate = function(models){
    Compra.belongsTo(models.User,{
        as: "User",
        foreignKey:"idUsuario"
    });
}