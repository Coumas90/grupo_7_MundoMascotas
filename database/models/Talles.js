module.exports = (sequelize, DataTypes) =>{
    let alias= 'Talle';
    let cols=

    {
        id_size: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_size: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    let config= {


        tableName: 'sizes',
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