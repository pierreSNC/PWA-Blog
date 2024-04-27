const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Post extends Model {}
Post.init({
    title: { type: DataTypes.STRING, allowNull: false },
    content: { type: DataTypes.TEXT, allowNull: false },
    thumbnail: { type: DataTypes.TEXT, allowNull: false }
}, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
});

module.exports = Post;
