module.exports = (sequelize, DataTypes) =>{
    const alias = "MedioDePago";
    const cols =
    {
        id_payment_method: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_payment_method: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config =
    {
        tableName: 'payment_methods',
        timestamps: false,
    };
    const MedioDePago = sequelize.define(alias,cols,config);
    
    MedioDePago.associate =  (models) => {
        MedioDePago.hasMany(models.Compra,{
            as:"Compra",
            foreignkey: "idMediosdepago"
        })
    }
    return MedioDePago;
}

