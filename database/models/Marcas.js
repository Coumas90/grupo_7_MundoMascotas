module.exports = (sequelize, DataTypes) =>{
    const alias = "Marca";
    const cols = 
    {
        id_brand: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_brand: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'brands',
        timestamps: false,
    };
    const Marca = sequelize.define(alias,cols,config);
    
    Marca.associate = (models) => {
        Marca.hasMany(models.Product,{
            as:"Producto",
            foreignKey: "idMarcas"
        })
    }
    return Marca;
}

