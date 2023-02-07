module.exports = (sequelize, dataTypes) =>{
    let alias= 'Talle';
    let cols=

    {
        id_size: {
            type: dataTypes.INTEGER,
            allowNull: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_size: {
            type: dataTypes.STRING,
            allowNull: false,
        }

    };
    let config= {


        tableName: 'sizes',
        timestamps: false,
    };

    let Size = sequelize.define(alias,cols,config);

    Size.associate =  (models) => {
        Size.hasMany(models.Product,{
            as:"Product",
            foreignKey: "id_size"
        })
    }
    return Size;
}