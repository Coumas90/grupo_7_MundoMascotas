const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Talle = Sequelize.define("Talle",
    {
        idTalles: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreTalla: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        tableName: 'Tallas',
        timestamps: false,
    }
    );
    Talle.associate = function (models){
        Talle.hasMany(models.Product,{
            as:"Product",
            foreignkey: "idTalles"
        })
    }
    return Talle;
}

