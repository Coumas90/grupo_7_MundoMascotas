const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Categoria = sequelize.define("Categoria",
    {
        idCategorias: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombreCategoria: {
            type: DataTypes.VARCHAR(45),
            allowNull: false,
        }

    },
    {
        tableName: 'Categorias',
        timestamps: false,
    }
    );
    return Categoria;
}

Categoria.associate = function (models){
    Categoria.hasMany(models.Product,{
        as:"Product",
        foreignkey: "idCategorias"
    })
}