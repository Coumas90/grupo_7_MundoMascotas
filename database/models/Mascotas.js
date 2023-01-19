const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Mascota = sequelize.define("Mascota",
    {
        idMascotas: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreMascota: {
            type: DataTypes.VARCHAR(45),
            allowNull: false,
        }

    },
    {
        tableName: 'Mascotas',
        timestamps: false,
    }
    );
    return Mascota;
}

Mascota.associate = function (models){
    Mascota.hasMany(models.Product,{
        as:"Product",
        foreignkey: "idMascotas"
    })
}