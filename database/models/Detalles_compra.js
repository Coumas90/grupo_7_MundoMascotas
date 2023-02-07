module.exports = (Sequelize, DataTypes) =>{
    const alias = "Detalle Compra";
    const cols = {
        id_purchase_detail: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        id_purchase_product:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_purchase:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key

        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'purchases_detail',
        timestamps: false,
    };

    const DetalleCompra = Sequelize.define(alias,cols,config);

    DetalleCompra.associate = (models) => {
        // cada linea de detalle pertenece a una sola venta
        DetalleCompra.belongsTo(models.Compra,{
            as:"Compra",
            foreignKey: "idCompra"
        });
        DetalleCompra.belongsToMany(models.Product,{
            as: "Product",
            through: "Producto_Compra",
            foreignKey:"idDetalleCompra",
            otherKey: "idProducto",
            timestamps:false
        });
    }
    
    return DetalleCompra;
}

