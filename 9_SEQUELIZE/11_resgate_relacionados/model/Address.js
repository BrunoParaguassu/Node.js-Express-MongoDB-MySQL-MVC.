const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const User = require('./User');

const Address = db.define('Address', {
    
    street: {
        type: DataTypes.STRING,
        required: true,
    },
    Number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    },

});

User.hasMany(Address);
Address.belongsTo(User);
module.exports = Address;