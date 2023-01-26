const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const CategoriaUser = Sequelize.define("CategoriaUser",
    {
        idUsersCategories: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreCategoriaUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    },
    {
        tableName: 'Users Categories',
        timestamps: false,
    }
    );
    CategoriaUser.associate = function (models){
        CategoriaUser.hasMany(models.User,{
            as:"Usuario",
            foreignkey: "idUsersCategories"
        })
    }
    return CategoriaUser;
}

