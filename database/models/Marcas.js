module.exports = (sequelize, DataTypes) =>{
    const alias = "Marca";
    const cols = 
    {
        idMarcas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombreMarca: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'Marcas',
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

