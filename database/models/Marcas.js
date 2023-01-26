const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Marca = Sequelize.define("Marca",
    {
        idMarcas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombreMarca: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        tableName: 'Marcas',
        timestamps: false,
    }
    );
    Marca.associate = function (models){
        Marca.hasMany(models.Product,{
            as:"Product",
            foreignkey: "idMarcas"
        })
    }
    return Marca;
}

