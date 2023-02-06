module.exports = (sequelize, DataTypes) =>{
    const alias = "MedioDePago";
    const cols =
    {
        idMedioDePago: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreMedioDePago: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'Medios de pago',
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

