module.exports = (sequelize, DataTypes) =>{
    const alias = "Color"
    const cols = 
    {
        id_color: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_color: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config = 
    {
        tableName: 'colors',
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

