module.exports = (sequelize, DataTypes) =>{
    const alias= "User";
    const cols=
    {
        idUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        Email:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Apellido:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        DNI:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Telefono:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Avatar:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password2:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        idUsersCategory:{
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references:{
                model: 'CategoriaUser',
                key:'idUsersCategory'
            }
            //foreign key
        }

    };
    const config =
    {
        tableName: 'Users',
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


