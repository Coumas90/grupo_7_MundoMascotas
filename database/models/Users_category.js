const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const CategoriaUser = sequelize.define("CategoriaUser",
    {
        idUsersCategories: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreCategoriaUsuario: {
            type: DataTypes.VARCHAR(45),
            allowNull: false,
        }

    },
    {
        tableName: 'Users Categories',
        timestamps: false,
    }
    );
    return CategoriaUser;
}

CategoriaUser.associate = function (models){
    CategoriaUser.hasMany(models.User,{
        as:"Usuario",
        foreignkey: "idUsersCategories"
    })
}