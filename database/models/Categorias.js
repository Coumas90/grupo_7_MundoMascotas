module.exports = (Sequelize, DataTypes) =>{
        const alias = "Categoria";
        const columns = {
        idCategoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombreCategoria: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    };
        const config= {
        tableName: 'Categorias',
        timestamps: false,
    }

    const Categoria = Sequelize.define(alias,columns,config)

    //Models lo que hace es que sequelize trae todos los modelos que yo haya creado
    Categoria.associate = function (models){
    Categoria.hasMany(models.Product,{
        as:"Product",
        foreignKey: "idCategoria"
    })
}
    return Categoria;
}

