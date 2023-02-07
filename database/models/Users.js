module.exports = (sequelize, DataTypes) =>{
    const alias= "User";
    const cols=
    {
        id_user: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dni:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        telephone:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar_image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password2:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        id_user_category:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            //foreign key
        }

    };
    const config =
    {
        tableName: 'users_db',
        timestamps: false,
    };
    const User = sequelize.define(alias,cols,config);
    
    User.associate =  (models) => {
        User.hasMany(models.Compra,{
            as:"Compra",
            foreignKey: "idUsuario"
        });
        User.belongsTo(models.CategoriaUser,{
            as: "User Category",
            foreignKey:"idUsersCategory"
        });
    }
    return User;
}


