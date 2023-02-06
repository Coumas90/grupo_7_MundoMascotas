module.exports = (sequelize, DataTypes) =>{
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

    let Talle = sequelize.define(alias,cols,config);

    Talle.associate =  (models) => {
        Talle.hasMany(models.Product,{
            as:"Product",
            foreignKey: "idTalles"
        })
    }
    return Talle;
}