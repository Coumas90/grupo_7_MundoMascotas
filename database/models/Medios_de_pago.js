const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const MedioDePago = Sequelize.define("MedioDePago",
    {
        idMedioDePago: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreMedioDePago: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        tableName: 'Medios de pago',
        timestamps: false,
    }
    );
    MedioDePago.associate = function (models){
        MedioDePago.hasMany(models.Compra,{
            as:"Compra",
            foreignkey: "idMediosdepago"
        })
    }
    return MedioDePago;
}

