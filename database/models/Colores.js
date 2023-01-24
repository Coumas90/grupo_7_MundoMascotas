const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Color = sequelize.define("Color",
    {
        idColor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombreColor: {
            type: DataTypes.VARCHAR(45),
            allowNull: false,
        }

    },
    {
        tableName: 'Colores',
        timestamps: false,
    }
    );
    return Color;
}

Color.associate = function (models){
    Color.hasMany(models.Product,{
        as:"Product",
        foreignkey: "idColor"
    })
}