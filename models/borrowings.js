
const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../data_base/db');
//const user = require('./user_profile');

const Borrowing = database.define('Borrowing', {
    borrowing_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'user_profile',
            key: 'id'
        }
    },
    book_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'user_library',  // Certifique-se de ter o modelo `books` definido
            key: 'book_id'
        }
    },
    borrow_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    return_date: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    //configurações do modelo
    timestamps: true, // habilita createdAt e updatedAt
    hooks: {
        beforeCreate: (User, options) => {
            const now = new Date();
            const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
            Borrowing.createdAt = threeHoursLater;
            Borrowing.updatedAt = threeHoursLater;

        },
        beforeUpdate: (User, options) => {
            const now = new Date();
            const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
            Borrowing.updatedAt = threeHoursLater;

    }
}

});

module.exports = Borrowing;
