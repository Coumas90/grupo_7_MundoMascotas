module.exports = (sequelize, dataTypes) =>{
    const alias = "Detalle Compra";
    const cols = {
        id_purchase_detail: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        id_purchase_product:{
            type: dataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'ProductoCompra',
                key:'idProducto_Compra'
            }
            //foreign key
        },
        quantity: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        id_purchase:{
            type: dataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Compra',
                key:'idCompra'
            }
            //foreign key

        },
        price:{
            type: dataTypes.DECIMAL,
            allowNull: false,
        }

    };
    const config =
    {
        tableName: 'purchases_detail',
        timestamps: false,
    };

    const PurchaseDetail= sequelize.define(alias,cols,config);

    PurchaseDetail.associate = (models) => {
        // cada linea de detalle pertenece a una sola venta
        PurchaseDetail.belongsTo(models.Compra,{
            as:"Compra",
            foreignKey: "id_purchase"
        });
        PurchaseDetail.belongsToMany(models.Product,{
            as: "Product",
            through: "purchase_products",
            foreignKey:"id_purchase_detail",
            otherKey: "id_product",
            timestamps:false
        });
    }
    
    return PurchaseDetail;
}

