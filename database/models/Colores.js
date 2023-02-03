const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Color = Sequelize.define("Color",
    {
        idColor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombreColor: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        tableName: 'Colores',
        timestamps: false,
    }
    );
    Color.associate = function (models){
        Color.hasMany(models.Product,{
            as:"Product",
            foreignKey: "idColor"
        })
    }
    return Color;
}

