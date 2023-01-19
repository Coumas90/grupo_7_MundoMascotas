const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Marca = sequelize.define("Marca",
    {
        idMarcas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombreMarca: {
            type: DataTypes.VARCHAR(80),
            allowNull: false,
        }

    },
    {
        tableName: 'Marcas',
        timestamps: false,
    }
    );
    return Marca;
}

Marca.associate = function (models){
    Marca.hasMany(models.Product,{
        as:"Product",
        foreignkey: "idMarcas"
    })
}