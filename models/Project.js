const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Project extends Model {}

Project.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cost: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING(1234),
            allowNull: false,
        },

        owner_id: {
            type: DataTypes.INTEGER,
            references: {
               model: 'owner',
               key: 'id' 
            }
        },

        general_contractor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'generalContractor',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underScored: true,
        modelName: 'project' 
    }
);

module.exports = Project;