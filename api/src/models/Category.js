const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Model {}

Category.init({

    name: {
        type: DataTypes.STRING, allowNull: false
    }

}, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories'
});

module.exports = Category;