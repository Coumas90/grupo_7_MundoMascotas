module.exports = (sequelize, dataTypes) =>{
    const alias = "Pet";
    const cols =
    {
        id_pet: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true 
        },
        name_pet: {
            type: dataTypes.STRING,
            allowNull: false,
        }

    };
    const config =
    {
        tableName: 'pets',
        timestamps: false,
    };
    const Pet = sequelize.define(alias,cols,config);
    
    Pet.associate =  (models) => {
        Pet.hasMany(models.Product,{
            as:"Product",
            foreignKey: "id_pet"
        })
    }
    return Pet;
}

