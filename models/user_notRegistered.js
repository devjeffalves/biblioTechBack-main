const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../data_base/db');


const UserNotRegistered = database.define('user_notRegistered', {
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
    
    phoneNumber: {
        type: DataTypes.STRING, // Corrigido para STRING
        allowNull: false,
        validate: {
          is: /^[0-9()+\- ]+$/i // Expressão regular para validar números de telefone
        }
      }
    }, {
        //configurações do modelo
        timestamps: true, // habilita createdAt e updatedAt
        hooks: {
            beforeCreate: (User, options) => {
                const now = new Date();
                const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
                UserNotRegistered.createdAt = threeHoursLater;
                UserNotRegistered.updatedAt = threeHoursLater;

            },
            beforeUpdate: (User, options) => {
                const now = new Date();
                const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
                UserNotRegistered.updatedAt = threeHoursLater;

        }
    }

    });

    module.exports = UserNotRegistered;