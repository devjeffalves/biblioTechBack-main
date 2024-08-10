const Sequelize = require('sequelize');
const database = require('../data_base/db');

const User = database.define('user_register', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
        },
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },

    email: { 
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        validate: {
            isEmail: {
                msg: 'Email inválido',
            },
        },
    },
    password: { 
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
            len: {
                args: [6, 50],
                msg: 'A senha precisa ter entre 6 e 50 caracteres',
            },
        },
   },
},
 {
    //configurações do modelo
    timestamps: true, // habilita createdAt e updatedAt
    hooks: {
        beforeCreate: (User, options) => {
            const now = new Date();
            const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
            User.createdAt = threeHoursLater;
            User.updatedAt = threeHoursLater;

        },
        beforeUpdate: (User, options) => {
            const now = new Date();
            const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
            User.updatedAt = threeHoursLater;

    }
}

});

module.exports = User;
