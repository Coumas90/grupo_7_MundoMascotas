const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Categoria = Sequelize.define("Categoria",
    {
        idCategoria: {
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

//Models lo que hace es que sequelize trae todos los modelos que yo haya creado
Categoria.associate = function (models){
    Categoria.hasMany(models.Product,{
        as:"Product",
        foreignkey: "idCategoria"
    })
}