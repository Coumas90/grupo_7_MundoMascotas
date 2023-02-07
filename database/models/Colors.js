module.exports = (sequelize, dataTypes) =>{
    const alias = "Color"
    const cols = 
    {
        id_color: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_color: {
            type: dataTypes.STRING,
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
            as:"Products",
            foreignKey: "id_color"
        })
    }
    return Color;
}

