const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class GeneralContractors extends Model {}

GeneralContractors.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            auto_increment: true,
        },
        
        company_name: {
            type: DataTypes.STRING,
            allowNull: false,   
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        business_address: {
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