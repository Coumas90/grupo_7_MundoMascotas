module.exports = (sequelize, dataTypes) =>{
    const alias= "User";
    const cols=
    {
        id_user: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        email:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false,
        },
        surname:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        dni:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        telephone:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        image:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: dataTypes.STRING,
            allowNull: false,
        },
        password2:{
            type: dataTypes.STRING,
            allowNull: false,
        }

    };
    const config =
    {
        tableName: 'users_db',
        timestamps: false,
    };
    const User = sequelize.define(alias,cols,config);
    
    User.associate =  (models) => {
        User.hasMany(models.Purchase,{
            as:"Compra",
            foreignKey: "id_user"
        });
    }

    User.findByEmail= function (email){
        return this.findOne({where:{email:email}});
    };
    return User;
}


