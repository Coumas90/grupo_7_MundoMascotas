module.exports = (sequelize, dataTypes) =>{
    const alias = "Weight";
    const cols=
    {
        id_weight: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_weight: {
            type: dataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'weights',
        timestamps: false,
    };
    const Weight = sequelize.define(alias,cols,config);
    
    Weight.associate =  (models) => {
        Weight.hasMany(models.Product,{
            as:"Product",
            foreignKey: "id_weight"
        })
    }
    return Weight;
}

