const GeneralContractors = require('./GeneralContractors');
const Owner = require('./Owner');
const Project = require('./Project');
const Scope = require('./Scope');


GeneralContractors.hasMany(Project, {
    foreignKey: 'general_contractor_id',
    onDelete: 'CASCADE'
});

Project.belongsTo(GeneralContractors, {
    foreignKey: 'general_contractor_id'
});

Project.hasMany(Scope, {
    foreignKey: 'project_id',
    key: 'id'
})

Scope.belongsTo(Project, {
    foreignKey: 'project_id'
})

Owner.hasMany(Project, {
    foreignKey: 'owner_id',
    onDelete: 'CASCADE'
})

Project.belongsTo(Owner, {
    foreignKey: 'owner_id'
})


module.exports = { 
    GeneralContractors,
    Owner,
    Project,
    Scope,
};

