module.exports = (sequelize, DataTypes) =>{
    const alias = "Mascota";
    const cols =
    {
        id_pet: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_pet: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config =
    {
        tableName: 'pets',
        timestamps: false,
    };
    const Mascota = sequelize.define(alias,cols,config);
    
    Mascota.associate =  (models) => {
        Mascota.hasMany(models.Product,{
            as:"Product",
            foreignKey: "idMascotas"
        })
    }
    return Mascota;
}

