const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Talle = sequelize.define("Talle",
    {
        idTalles: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreTalla: {
            type: DataTypes.VARCHAR(45),
            allowNull: false,
        }

    },
    {
        tableName: 'Tallas',
        timestamps: false,
    }
    );
    return Talla;
}

Talle.associate = function (models){
    Talle.hasMany(models.Product,{
        as:"Product",
        foreignkey: "idTalles"
    })
}