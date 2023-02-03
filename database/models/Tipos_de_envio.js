const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Envio = Sequelize.define("Envio",
    {
        idTiposdeenvio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreTipoDeEnvio: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        tableName: 'Tipos de envio',
        timestamps: false,
    }
    );
    Envio.associate = function (models){
        Envio.hasMany(models.Compra,{
            as:"Compra",
            foreignKey: "idTiposdeenvio"
        })
    }
    return Envio;
}

