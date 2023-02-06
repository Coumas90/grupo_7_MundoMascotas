module.exports = (sequelize, DataTypes) =>{
    const alias = "Color"
    const cols = 
    {
        idColor: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombreColor: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config = 
    {
        tableName: 'Colores',
        timestamps: false,
    };
    const Color = sequelize.define(alias,cols,config);
    
    Color.associate =  (models) => {
        Color.hasMany(models.Product,{
            as:"Product",
            foreignKey: "idColor"
        })
    }
    return Color;
}

