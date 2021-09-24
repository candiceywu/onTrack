const GeneralContractors = require('./GeneralContractors');
const Owner = require('./Owner');
const Project = require('./Project');

GeneralContractors.hasOne(Project, {
    foreignKey: ''
})



module.exports = { 
    GeneralContractors,
    Owner,
    Project,
};

