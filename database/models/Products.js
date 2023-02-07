module.exports = (sequelize, dataTypes) =>{
    const alias= "Product";
    const cols=
    {
        id_product: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        price:{
            type: dataTypes.DECIMAL,
            allowNull: false,
        },
        discount:{
            type: dataTypes.DECIMAL,
            allowNull: false,
        },
        id_brand:{
            type: dataTypes.INTEGER,
            allowNull: false,
            //foreign key
        },
        id_category:{
            type: dataTypes.INTEGER,
            allowNull: false,
            //foreign key
        },
        id_color:{
            type: dataTypes.INTEGER,
            allowNull: false,
            //foreign key
        },
        id_size:{
            type: dataTypes.INTEGER,
            allowNull: false,
            //foreign key
        },
        id_weight:{
            type: dataTypes.INTEGER,
            allowNull: false,
            //foreign key
        },
        id_pet:{
            type: dataTypes.INTEGER,
            allowNull: false,
            //foreign key
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'products',
        timestamps: false,
    };

    const Product = sequelize.define(alias,cols,config);

    Product.associate = (models) => {
        Product.belongsTo(models.Marca,{
            as: "Marca",
            foreignKey:"id_brand"
        });
        Product.belongsTo(models.Categoria,{
            as: "Categoria",
            foreignKey:"id_category"
        });
        Product.belongsTo(models.Color,{
            as: "Color",
            foreignKey:"id_color"
        });
        Product.belongsTo(models.Talle,{
            as: "Talle",
            foreignKey:"id_size"
        });
        Product.belongsTo(models.Peso,{
            as: "Peso",
            foreignKey:"id_weight"
        });
        Product.belongsTo(models.Mascota,{
            as: "Mascota",
            foreignKey:"id_pet"
        });
        Product.belongsToMany(models.DetalleCompra,{
            as: "Detalle Compra",
            //Tabla intermedia de la base de datos
            through: "purchase_products",
            //Dato del producto en la tabla intermedia
            foreignKey:"id_product",
            //Dato del detalle de compra en la tabla intermedia
            otherKey: "id_purchase_detail",
            timestamps:false
        });
    }
    return Product;
}