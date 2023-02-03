const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Peso = Sequelize.define("Peso",
    {
        idPesos: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombrePeso: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        tableName: 'Pesos',
        timestamps: false,
    }
    );
    Peso.associate = function (models){
        Peso.hasMany(models.Product,{
            as:"Product",
            foreignKey: "idPesos"
        })
    }
    return Peso;
}

