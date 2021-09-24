const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Owner extends Model {}

Owner.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        oUsername: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        oEmail: {
            type: DataTypes.STRING,
            allowNull: false,
        },
<<<<<<< HEAD
        oFirstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        oLastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        oNnumber: {
=======
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        number: {
>>>>>>> c1f045bbd82f1e5b10086ab4090147801c29cb46
            type: DataTypes.STRING,
            allowNull: false,
        },
        oPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'owner'
    }
);

module.exports = Owner;