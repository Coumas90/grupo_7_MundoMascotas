const { Sequelize, DataTypes } = require("sequelize");
const User = require("../../models/User");

module.exports = (Sequelize, DataTypes) =>{
    const User = sequelize.define("User",
    {
        idUsuarios: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        Email:{
            type: DataTypes.VARCHAR(100),
            allowNull: false,
        },
        Nombre: {
            type: DataTypes.VARCHAR(100),
            allowNull: false,
        },
        Apellido:{
            type: DataTypes.VARCHAR(100),
            allowNull: false,
        },
        DNI:{
            type: DataTypes.VARCHAR(45),
            allowNull: false,
        },
        Telefono:{
            type: DataTypes.VARCHAR(45),
            allowNull: false,
        },
        Avatar:{
            type: DataTypes.VARCHAR(200),
            allowNull: false,
        },
        Password:{
            type: DataTypes.VARCHAR(45),
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
    return User;
}

User.associate = function(models){
    User.belongsTo(models.CategoriaUser,{
        as: "User Category",
        foreignKey:"idUsersCategories"
    });
}

User.associate = function (models){
    User.hasMany(models.Compra,{
        as:"Compra",
        foreignkey: "idUsuarios"
    })
}