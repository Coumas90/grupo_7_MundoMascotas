module.exports = (sequelize, dataTypes) =>{
    const alias = "Marca";
    const cols = 
    {
        id_brand: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_brand: {
            type: dataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'brands',
        timestamps: false,
    };
    const Brand = sequelize.define(alias,cols,config);
    
    Brand.associate = (models) => {
        Brand.hasMany(models.Product,{
            as:"Producto",
            foreignKey: "id_brand"
        })
    }
    return Brand;
}

