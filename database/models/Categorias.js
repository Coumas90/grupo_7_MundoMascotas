module.exports = (sequelize, DataTypes) =>{
        const alias = "Categoria";
        const cols = {
        id_category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_category: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    };
        const config= {
        tableName: 'categories',
        timestamps: false,
    }

    const Categoria = sequelize.define(alias,cols,config);

    //Models lo que hace es que sequelize trae todos los modelos que yo haya creado
    Categoria.associate = (models)=> {
    Categoria.hasMany(models.Product,{
        as:"Product",
        foreignKey: "idCategoria"
    })
}
    return Categoria;
}

