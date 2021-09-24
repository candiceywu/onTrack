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
        company_name: {
            type: DataTypes.STRING,
            allowNull: false,   
        },
        license_number: {
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
        underscored: true,
        modelName: 'generalContractor'
    }
);

module.exports = GeneralContractors;