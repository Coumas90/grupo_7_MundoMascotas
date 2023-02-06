module.exports = (sequelize, DataTypes) =>{
    const alias= "Envio";
    const cols=
    {
        idTiposdeenvio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreTipoDeEnvio: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'Tipos de envio',
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

