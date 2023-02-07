module.exports = (sequelize, DataTypes) =>{
    const alias ="CategoriaUser";
    const cols=
    {
        id_user_category: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_user_category: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'users_categories',
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

