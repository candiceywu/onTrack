// have gen contractor author_id column in scope table

// save req.session.user_id to scope author_id column when then pass a new scope

// tell someone who views the 

const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Scope extends Model {}

Scope.init(
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        is_complete: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },

        // author_id: {
        //     type: DataTypes
        // },

        picture: {
            type: DataTypes.STRING(1234),
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underScored: true,
        modelName: 'owner'
    }
);



