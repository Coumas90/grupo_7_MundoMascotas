module.exports = (sequelize, DataTypes) =>{
    const alias= "Envio";
    const cols=
    {
        id_delivery_method: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_id_delivery_method: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'delivery_methods',
        timestamps: false,
    };
    const Envio = sequelize.define(alias,cols,config);
    
    Envio.associate =  (models) => {
        Envio.hasMany(models.Compra,{
            as:"Compra",
            foreignKey: "idTiposdeenvio"
        })
    }
    return Envio;
}

