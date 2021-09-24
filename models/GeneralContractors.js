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
        oUsername: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        oEmail: {
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
        underscored: true,
        modelName: 'generalContractor'
    }
);

module.exports = GeneralContractors;