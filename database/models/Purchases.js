module.exports = (sequelize, dataTypes) =>{
 const alias = "Compra";
 const cols=
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
            references:{
                model: 'MedioDePago',
                key:'idMedioDePago'
            }
            //foreign key

        },
        id_purchase_detail:{
            type: dataTypes.INTEGER,
            allowNull: false,
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

    };
    const config =
    {
        tableName: 'purchases',
        timestamps: false,
    };

    const Purchase = sequelize.define (alias,cols,config);

    //Has many porque podes tener varias lineas del detalle de la compra para una compra
    Purchase.associate = (models) => {
    //una compra puede estar en varias lineas de detalle
    Purchase.belongsTo(models.PurchaseDetail,{
        as: "Detalle_Compra",
        foreignKey:"id_purchase_detail"
    });
    Purchase.belongsTo(models.DeliveryMethod,{
        as: "Envio",
        foreignKey:"id_delivery_method"
    });
    Purchase.belongsTo(models.PaymentMethod,{
        as: "Medio de Pago",
        foreignKey:"id_payment_method"
    });
    Purchase.belongsTo(models.User,{
        as: "User",
        foreignKey:"id_user"
    });
}
    return Purchase;
}

