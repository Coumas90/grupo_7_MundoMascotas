module.exports = (Sequelize, DataTypes) =>{
    const alias= "ProductoCompra";
    const cols=
    {
        idProducto_Compra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        idDetalleCompra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'DetalleCompra',
                key:'idDetalleCompra'
            }
            //foreign key
        },
        idProducto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'Product',
                key:'idProductos'
            }
            //foreign key
        }

    };
    const config =
    {
        tableName: 'Producto_Compra',
        timestamps: false,
    };
    const ProductoCompra = Sequelize.define(alias,cols,config);

    ProductoCompra.associate =  (models) => {
        ProductoCompra.hasMany(models.Product,{
            as:"Product",
            foreignKey: "idProducto"
        })
    }
    return ProductoCompra;
}

