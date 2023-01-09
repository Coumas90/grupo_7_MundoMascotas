// Representacion de lo que hay dentro del archivo json de usuarios

// 1. Guardar al usuario en la DB

// 2. Loguear al usuario

// 3. Buscar al usuario que se quiere loguear a traves de su email

// 4. Buscar a un usuario a traves del ID

// 5. Editar la informacion de un usuario

// 6. Eliminar a un usuario de la DB

// Vamos a hacer un objeto literal que va a tener metodos que se van a encargar de esto
const fs = require('fs');

const User = {
    //archivo que vamos a leer
    fileName : './database/users.json',
    //Debemos traer la data que hay en el archivo
    getData: function(){
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },
    // Encontrar todos los usuarios
    findAll: function(){
        return this.getData();
    },
    // Generar ID
    generateID: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if(lastUser){
            return lastUser.id + 1; 
        }else{return 1;}
        
    },

    // 1. Guardar al usuario en la DB
    create: function(userData){
        let allUsers = this.findAll();
        console.log(allUsers);
        let newUser = {
            id: this.generateID(),
            ...userData
        }
        console.log(newUser);
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers,null,' '));
        console.log(newUser);
        return newUser; 
        
    },
    // 4. Buscar a un usuario a traves del ID
    findByPK : function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id == id);
        return userFound;
    },
    // // 3. Buscar al usuario que se quiere loguear a cualquier field posible. Trae el primero que encuentra unicamente
    // findByField : function (field, text){
    //     let allUsers = this.findAll();
    //     let userFound = allUsers.find(oneUser => oneUser.[field] === text);
    //     return userFound
    // },
    // 3. Buscar al usuario que se quiere loguear a traves de su email
    findByEmail : function (email){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.email === email);
        return userFound;
    },
    delete : function(id){
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers,null,' '));
        return true;
    }
}

module.exports = User;