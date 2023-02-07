module.exports = (sequelize, dataTypes) =>{
 const Compra = sequelize.define("Compra",
    {
        id_purchase: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        id_user:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'User',
                key:'idUsuario'
            }
            //foreign key
        },
        date: {
            type: dataTypes.DATEONLY,
            allowNull: false,
        },
        id_payment_method:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'MedioDePago',
                key:'idMedioDePago'
            }
            //foreign key

        },
        id_purchase_detail:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'DetalleCompra',
                key:'idDetalleCompra'
            }
            //foreign key
        },
        address: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        id_delivery_method:{
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'Envio',
                key:'idTiposdeenvio'
            }
            //foreign key
        },
        total: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }

    },
    {
        tableName: 'purchases',
        timestamps: false,
    });
    
    //Has many porque podes tener varias lineas del detalle de la compra para una compra
    Compra.associate = (models) => {
    //una compra puede estar en varias lineas de detalle
    Compra.belongsTo(models.DetalleCompra,{
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

