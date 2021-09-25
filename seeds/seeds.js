const sequelize = require('../config/connection');
const { Owner, GeneralContractors, Project } = require('../models');

const ownerData = require('./ownerData.json');
const gcData = require('./gcData.json')
const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const ownerSeed = await Owner.bulkCreate(ownerData, {
    individualHooks: true,
    returning: true,
  });

  const gcSeed = await GeneralContractors.bulkCreate(gcData, {
    individualHooks: true,
    returning: true,
  });

  const projectSeed = await Project.bulkCreate(projectData, {
    individualHooks: true,
    returning: true,
  });

//   for (const project of projectData) {
//     await Project.create({
//       ...project,
//       user_id: users[Math.floor(Math.random() * users.length)].id,
//     });
//   }

  process.exit(0);
};

seedDatabase();
