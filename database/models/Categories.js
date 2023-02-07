module.exports = (sequelize, dataTypes) =>{
        const alias = "Category";
        const cols = {
        id_category: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_category: {
            type: dataTypes.STRING,
            allowNull: false,
        }
    };
        const config= {
        tableName: 'categories',
        timestamps: false,
    }

    const Category = sequelize.define(alias,cols,config);

    //Models lo que hace es que sequelize trae todos los modelos que yo haya creado
    Category.associate = (models)=> {
    Category.hasMany(models.Product,{
        as:"Products",
        foreignKey: "id_category"
    })
}
    return Category;
}

