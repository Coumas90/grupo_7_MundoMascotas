module.exports = (sequelize, dataTypes) =>{
    const alias ="UserCategory";
    const cols=
    {
        id_user_category: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_user_category: {
            type: dataTypes.STRING,
            allowNull: false,
        }

    };
    const config=
    {
        tableName: 'users_categories',
        timestamps: false,
    };
    const UserCategory = sequelize.define(alias,cols,config);
    
    return UserCategory;
}

