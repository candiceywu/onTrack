const router = require('express').Router();
const { GeneralContractors, Owner, Project, Scope } = require('../models');
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
  

  res.render('login');
  
});

router.get('/loginchoice', (req, res) => {

  res.render('loginchoice');
})

router.get('/ownersignup', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('ownersignup');
});

router.get('/gcsignup', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('gcsignup');
});

// router.get('/projects', async (req, res) => {
//   // if (req.session.logged_in) {
//   //   res.redirect('/');
//   //   return;
//   // }

//   const projectData = await Project.findAll();

//   // Serialize data so the template can read it
//   const projects = projectData.map((project) => project.get({ plain: true }));

//   res.render('projects', { projects });
// });

//Renders All Projects for Specific User
router.get('/projects', async (req, res) => {
  try {
        
      let userData = await GeneralContractors.findByPk(req.session.user_id, {
        include: {model: Project}
      })
      
      let user = userData.get({ plain: true});
      console.log(user);
      
      
      res.render('projects', { 
        user,
        isContractor: req.session.isContractor,
        logged_in: req.session.logged_in,
       })
      

  } catch (err) {
      res.status(400).json(err);
  }
});

//Renders Single Project with all Scope Items
router.get('/projects/:id', async (req, res) => {
  try {
        console.log(req.params.id);
      let userData = await Project.findByPk(req.params.id, {
        include: {model: Scope}
      });
      
      let user = userData.get({ plain: true});
      console.log(user);
      
      // res.json(userData);

      res.render('scope', { 
        user,
        isContractor: req.session.isContractor,
        logged_in: req.session.logged_in,
       })
      

  } catch (err) {
      res.status(400).json(err);
  }
});


//display scopes under individual project
router.get('/scope', async (req, res) => {
  try {

    let userData = await GeneralContractors.findByPk(req.session.user_id, {
      include: {model: Scope}
    });
    let user = userData.get({ plain: true });
      res.render('scope', { 
        user,
        isContractor: req.session.isContractor,
        userInfo: req.session.userInfo,
        logged_in: req.session.logged_in,
       })
    
  } catch (err) {
      res.status(400).json(err);
  }
});


module.exports = router;
