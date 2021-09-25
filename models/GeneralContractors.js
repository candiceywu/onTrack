const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class GeneralContractors extends Model {}

GeneralContractors.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        generalContractor: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        license: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underScored: true,
        modelName: 'generalContractor'
    }
);

module.exports = GeneralContractors;
