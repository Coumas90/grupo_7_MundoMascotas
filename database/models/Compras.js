module.exports = (Sequelize, DataTypes) =>{
    const alias = "Compra" ;
    const cols =
    {
        id_purchase: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        id_user:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        id_payment_method:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key

        },
        id_purchase_detail:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_delivery_method:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }

    };
    const config =
    {
        tableName: 'purchases',
        timestamps: false,
    };

    const Compra = Sequelize.define(alias, cols, config);
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

