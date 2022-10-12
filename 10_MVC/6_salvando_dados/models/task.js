const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const task = db.define('task', {
    title: {
        type: DataTypes.STRING,
        required: true,
    },
    description: {
        type: DataTypes.STRING,
        required: true,
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true,
    },
}); 

module.exports = task;