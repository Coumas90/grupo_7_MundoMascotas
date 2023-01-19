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
        idUsuarios:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        Fecha: {
            type: DataTypes.DATETIME,
            allowNull: false,
        },
        idMediosdepago:{
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

Compra.associate = function(models){
    Compra.belongsTo(models.DetalleCompra,{
        as: "Detalle Compra",
        foreignKey:"idDetalleCompra"
    });
}

Compra.associate = function(models){
    Compra.belongsTo(models.Envio,{
        as: "Envio",
        foreignKey:"idTiposdeenvio"
    });
}
Compra.associate = function(models){
    Compra.belongsTo(models.MedioDePago,{
        as: "Medio de Pago",
        foreignKey:"idMediosdepago"
    });
}

Compra.associate = function(models){
    Compra.belongsTo(models.User,{
        as: "User",
        foreignKey:"idUsuarios"
    });
}