const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Peso = sequelize.define("Peso",
    {
        idPesos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombrePeso: {
            type: DataTypes.VARCHAR(45),
            allowNull: false,
        }

    },
    {
        tableName: 'Pesos',
        timestamps: false,
    }
    );
    return Peso;
}

Peso.associate = function (models){
    Peso.hasMany(models.Product,{
        as:"Product",
        foreignkey: "idPesos"
    })
}