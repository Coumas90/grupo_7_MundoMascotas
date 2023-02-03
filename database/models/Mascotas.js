const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    const Mascota = Sequelize.define("Mascota",
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

    },
    {
        tableName: 'Mascotas',
        timestamps: false,
    }
    );
    Mascota.associate = function (models){
        Mascota.hasMany(models.Product,{
            as:"Product",
            foreignKey: "idMascotas"
        })
    }
    return Mascota;
}

