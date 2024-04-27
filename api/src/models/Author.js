const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Author extends Model {}

Author.init({

    firstname: {
        type: DataTypes.STRING, allowNull: false
    },
    lastname: {
        type: DataTypes.STRING, allowNull: false
    },
    picture: {
        type: DataTypes.STRING, allowNull: false
    },
    linkedin: {
        type: DataTypes.STRING, allowNull: true
    },
    instagram: {
        type: DataTypes.STRING, allowNull: true
    },
    facebook: {
        type: DataTypes.STRING, allowNull: true
    }

}, {
    sequelize,
    modelName: 'Author',
    tableName: 'authors'
});

module.exports = Author;