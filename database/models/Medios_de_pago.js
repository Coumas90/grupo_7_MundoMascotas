const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const MedioDePago = sequelize.define("MedioDePago",
    {
        idMediodDePago: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreMedioDePago: {
            type: DataTypes.VARCHAR(200),
            allowNull: false,
        }

    },
    {
        tableName: 'Medios de pago',
        timestamps: false,
    }
    );
    return MedioDePago;
}

MedioDePago.associate = function (models){
    MedioDePago.hasMany(models.Compra,{
        as:"Compra",
        foreignkey: "idMediosdepago"
    })
}