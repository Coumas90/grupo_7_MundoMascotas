const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Envio = sequelize.define("Envio",
    {
        idTiposdeenvio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreTipoDeEnvio: {
            type: DataTypes.VARCHAR(200),
            allowNull: false,
        }

    },
    {
        tableName: 'Tipos de envio',
        timestamps: false,
    }
    );
    return Envio;
}

Envio.associate = function (models){
    Envio.hasMany(models.Compra,{
        as:"Compra",
        foreignkey: "idTiposdeenvio"
    })
}