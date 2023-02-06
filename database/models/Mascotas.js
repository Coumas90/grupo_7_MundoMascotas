module.exports = (sequelize, DataTypes) =>{
    const alias = "Mascota";
    const cols =
    {
        idMascota: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreMascota: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config =
    {
        tableName: 'Mascotas',
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

