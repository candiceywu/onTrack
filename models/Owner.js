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
        oFirstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        oLastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        oNnumber: {
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