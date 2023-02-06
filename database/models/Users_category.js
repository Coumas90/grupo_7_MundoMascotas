module.exports = (sequelize, DataTypes) =>{
    const alias ="CategoriaUser";
    const cols=
    {
        idUsersCategory: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        NombreCategoriaUsuario: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'Users Categories',
        timestamps: false,
    };
    const CategoriaUser = sequelize.define(alias,cols,config);
    
    CategoriaUser.associate =  (models) => {
        CategoriaUser.hasMany(models.User,{
            as:"Usuario",
            foreignKey: "idUsersCategory"
        })
    }
    return CategoriaUser;
}

