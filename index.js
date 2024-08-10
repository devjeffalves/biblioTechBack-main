// Sunc do Sequelize com nosso banco de dados, as tabelas serão mapeadas de forma correta 
// IIFE ( Immediately Invoked Function Expression) função em Javascript que e executada assim que definida.
(async () => {
    const database = require('./data_base/db');
    const UserNotRegistered = require('/models/user_notRegistered');
    //const User = require('./models/user_register');
    //const UserProfile = require('./models/user_profile');
    //const Book = require('./models/user_library');
    //const Borrowing= require('./models/user_profile');

    try { 
        const resultado = await database.sync();
        console.log(resultado);

    } catch (error) {
        console.log(error);
    }

    
//Insere registro via Sequelize
const resultadoCreate = await UserNotRegistered.create ({
   
    

})

console.log(resultadoCreate);

/* Buscar os registros inseridos
const Users = await User.findAll();
console.log(Users);
*/


}) ();
