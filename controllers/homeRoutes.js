const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage'
      // {
      //   users,
      // logged_in: req.session.logged_in,
      // }
    );
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/login', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('login');
});

router.get('/signup', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('signup');
});


//GET all projects on dashboard
router.get('/', async (req, res) => {
  try {
    const dbprojectData = await Project.findAll({
      include: [
        {
          model: Project,
          attributes: ['name'],
        },
      ],
    });

    const projects = projectData.map((project) =>
      project.get({ plain: true })
    );

    res.render('homepage', {
      projects,
    });
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


// GET one scope
//need to create an option for gc to edit a scope
router.get('/scope/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // If the user is logged in, allow user to view the scope
    try {
      const scopeData = await Scope.findByPk(req.params.id);
      const scope = scopeData.get({ plain: true });
      res.render('scope', { 
        scope, 
        isContractor: req.session.isContractor 
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// PUT scope
router.put('/scope/:id', async (req, res) => {
  try {
    const gcData = await Scope.update(req.body, {
      where: {
        id: req.params.id
      },
      individualHooks: true
    });
    if (!gcData[0]) {
      res.status(404).json({ message: 'Sorry, you can\'t modify this data.' });
      return;
    } res.status(200).json(gcData);
  } catch (err) {
    res.status(500).json(err)
  };
});

module.exports = router;
