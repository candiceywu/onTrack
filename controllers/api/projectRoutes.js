const router = require('express').Router();
const { Project } = require('../../models')



//GET all projects on dashboard
router.get('/', async (req, res) => {
  try {
    const dbprojectData = await Project.findAll();
      // include: [
      //   {
      //     model: Project,
      //     attributes: ['name'],
      //   },
      // ],

    res.status(200).json(dbprojectData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET one project
router.get('/project/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow them to view the gallery
    try {
      const dbprojectData = await Project.findByPk(req.params.id, {
        include: [
          {
            model: Project,
            attributes: [
              'id',
              'name',
              'address',
              'cost',
              'description',
            ],
          },
        ],
      });
      const project = dbprojectData.get({ plain: true });
      res.render('project', {
        project,
        isContractor: req.session.isContractor
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.post('/', async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      //user_id: 2  //req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;