const { Sequelize, DataTypes } = require("sequelize");
const User = require("../../models/User");

module.exports = (Sequelize, DataTypes) =>{
    const User = Sequelize.define("User",
    {
        idUsuarios: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        Email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Apellido:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        DNI:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Telefono:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Avatar:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        idUsersCategories:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        }

    },
    {
        tableName: 'Users',
        timestamps: false,
    }
    );
    User.associate = function (models){
        User.hasMany(models.Compra,{
            as:"Compra",
            foreignkey: "idUsuarios"
        })
    }

    User.associate = function(models){
        User.belongsTo(models.CategoriaUser,{
            as: "User Category",
            foreignKey:"idUsersCategories"
        });
    }
    
    return User;
}


