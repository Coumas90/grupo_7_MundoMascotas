module.exports = (Sequelize, DataTypes) =>{
    const alias = "Detalle Compra";
    const cols = {
        idDetalleCompra: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        idProducto_Compra:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        },
        Cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idCompra:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key

        },
        Precio:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'Detalle Compra',
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

