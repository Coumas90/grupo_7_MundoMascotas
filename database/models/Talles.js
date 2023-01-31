// const { Sequelize, DataTypes } = require("sequelize");

// module.exports = (Sequelize, DataTypes) =>{
//     const Talle = Sequelize.define("Talle",
//     {
//         idTalles: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             unique: true,
//             autoIncrement: true,
//             primaryKey: true 
//         },
//         NombreTalla: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         }

//     },
//     {
//         tableName: 'Talles',
//         timestamps: false,
//     }
//     );
//     Talle.associate = function (models){
//         Talle.hasMany(models.Product,{
//             as:"Product",
//             foreignkey: "idTalles"
//         })
//     }
//     return Talle;
// }

const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) =>{
    let alias= 'Talle';
    let cols=

    {
        idTalles: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        nombreTalla: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    let config= {


        tableName: 'Talles',
        timestamps: false,
    };

    let Talle = Sequelize.define(alias,cols,config)

    Talle.associate = function (models){
        Talle.hasMany(models.Product,{
            as:"Product",
            foreignkey: "idTalles"
        })
    }
    return Talle;
}