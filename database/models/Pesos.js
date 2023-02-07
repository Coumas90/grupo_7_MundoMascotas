module.exports = (sequelize, DataTypes) =>{
    const alias = "Peso";
    const cols=
    {
        id_weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_weight: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'weights',
        timestamps: false,
    };
    const Peso = sequelize.define(alias,cols,config);
    
    Peso.associate =  (models) => {
        Peso.hasMany(models.Product,{
            as:"Product",
            foreignKey: "idPesos"
        })
    }
    return Peso;
}

