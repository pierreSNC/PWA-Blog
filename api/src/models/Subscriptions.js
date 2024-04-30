const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Subscriptions extends Model {}

Subscriptions.init({
    subscription_json: {
        type: DataTypes.TEXT, allowNull: false
    }
},{
    sequelize,
        modelName: 'Subscriptions',
        tableName: 'subscriptions'
});

module.exports = Subscriptions;