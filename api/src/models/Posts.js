const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Post extends Model {}
Post.init({

    id_author: { type: DataTypes.INTEGER, allowNull: false },
    id_category: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    excerpt: { type: DataTypes.TEXT, allowNull: false },
    thumbnail: { type: DataTypes.STRING, allowNull: false },
    time_read: { type: DataTypes.STRING, allowNull: false },
    is_popular: {type: DataTypes.BOOLEAN, allowNull: false}

}, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
});

module.exports = Post;
