const GeneralContractors = require('./GeneralContractors');
const Owner = require('./Owner');
const Project = require('./Project');
const Scope = require('./Scope');


GeneralContractors.hasOne(Project, {
    foreignKey: ''
})




module.exports = { 
    GeneralContractors,
    Owner,
    Project,
    Scope,
};

