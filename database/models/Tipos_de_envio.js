module.exports = (sequelize, dataTypes) =>{
    const alias= "Envio";
    const cols=
    {
        id_delivery_method: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_id_delivery_method: {
            type: dataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'delivery_methods',
        timestamps: false,
    };
    const DeliveryMethod = sequelize.define(alias,cols,config);
    
    DeliveryMethod.associate =  (models) => {
        DeliveryMethod.hasMany(models.Compra,{
            as:"Compra",
            foreignKey: "id_delivery_method"
        })
    }
    return DeliveryMethod;
}

