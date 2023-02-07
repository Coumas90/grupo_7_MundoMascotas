module.exports = (sequelize, dataTypes) =>{
    const alias= "ProductoCompra";
    const cols=
    {
        id_purchase_product: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        id_purchase_detail: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'DetalleCompra',
                key:'idDetalleCompra'
            }
            //foreign key
        },
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false,
            references:{
                model: 'Product',
                key:'idProductos'
            }
            //foreign key
        }

    };
    const config =
    {
        tableName: 'purchase_products',
        timestamps: false,
    };
    const PruchaseProduct = sequelize.define(alias,cols,config);

    PruchaseProduct.associate =  (models) => {
        PruchaseProduct.hasMany(models.Product,{
            as:"Product",
            foreignKey: "id_product"
        })
    }
    return PruchaseProduct;
}

