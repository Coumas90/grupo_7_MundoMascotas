module.exports = (Sequelize, DataTypes) =>{
    const alias= "ProductoCompra";
    const cols=
    {
        id_purchase_product: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        id_purchase_detail: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        id_product: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        }

    };
    const config =
    {
        tableName: 'purchase_products',
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

