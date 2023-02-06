module.exports = (Sequelize, DataTypes) =>{
    const alias = "Compra" ;
    const cols =
    {
        idCompra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        idUsuario:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        Fecha: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        idMedioDePago:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key

        },
        idDetalleCompra:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        DireccionEntrega: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idEnvio:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        Total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

    };
    const config =
    {
        tableName: 'Compras',
        timestamps: false,
    };

    const Compra = Sequelize.define(alias,cols,config);
    //Has many porque podes tener varias lineas del detalle de la compra para una compra
    Compra.associate = (models) => {
    //una compra puede estar en varias lineas de detalle
    Compra.hasMany(models.DetalleCompra,{
        as: "Detalle_Compra",
        foreignKey:"idDetalleCompra"
    });
    Compra.belongsTo(models.Envio,{
        as: "Envio",
        foreignKey:"idEnvio"
    });
    Compra.belongsTo(models.MedioDePago,{
        as: "Medio de Pago",
        foreignKey:"idMedioDePago"
    });
    Compra.belongsTo(models.User,{
        as: "User",
        foreignKey:"idUsuario"
    });
}
    return Compra;
}

