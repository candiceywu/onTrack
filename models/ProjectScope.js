// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection');

// class ProjectScope extends Model {}

// ProjectScope.init(
//     {
//         project_id: {
//             references: {
//                 model: 'project',
//                 key: 'id'
//             },
//         },

        
//         scope_id: {
//             references: {
//                 model: 'scope',
//                 key: 'id'
//             }
//         },

//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underScored: true,
//         modelName: 'projectScope'
//     }
// );