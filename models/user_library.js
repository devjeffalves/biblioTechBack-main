const { DataTypes } = require('sequelize');
const Sequelize = require('sequelize');
const database = require('../data_base/db');

const Book = database.define('user_library', {
    book_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    author: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    isbn: {
        type: Sequelize.STRING(13),
        allowNull: true,
        unique: true
    },
    publish_date: {
        type: DataTypes.DATE,
        allowNull: true
    },
    genre: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM("available", "borrowed"),
        allowNull: false,
        defaultValue: "available"
    }
}, {
    //configurações do modelo
    timestamps: true, // habilita createdAt e updatedAt
    hooks: {
        beforeCreate: (User, options) => {
            const now = new Date();
            const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
            Book.createdAt = threeHoursLater;
            Book.updatedAt = threeHoursLater;

        },
        beforeUpdate: (User, options) => {
            const now = new Date();
            const threeHoursLater = new Date(now.getTime() - 3 * 60 * 60 * 1000);
            Book.updatedAt = threeHoursLater;

    }
}

});


module.exports = Book;