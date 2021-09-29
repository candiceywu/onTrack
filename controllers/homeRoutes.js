const router = require('express').Router();
const { GeneralContractors, Owner, Project, Scope } = require('../models');
const withAuth = require('../utils/auth');

//Render Homepage//
router.get('/', async (req, res) => {
  try {
    res.render('homepage'

    );
  } catch (err) {
    res.status(500).json(err);
  }
});

//Render Login Page//
router.get('/login', (req, res) => {
  

  res.render('login');
  
});

//Render Login Choice Page//
router.get('/loginchoice', (req, res) => {

  res.render('loginchoice');
})

//Render Owner Sign Up Page//
router.get('/ownersignup', (req, res) => {

  res.render('ownersignup');
});

//Render GC Sign Up Page//
router.get('/gcsignup', (req, res) => {

  res.render('gcsignup');
});

//Renders All Projects for Specific User
router.get('/projects', async (req, res) => {
  try {
      
      let userData;
      
      if(req.session.isContractor){
        userData = await GeneralContractors.findByPk(req.session.user_id, {
          include: {model: Project}
        })
      } else {
        userData = await Owner.findByPk(req.session.user_id, {
          include: {model: Project}
        })
      }

      let user = userData.get({ plain: true});

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

// GET one scope
router.get('/project/scope/:id', async (req, res) => {
  // If the user is logged in, allow user to view the scope
  try {
    const scopeData = await Scope.findByPk(req.params.id, {
      include: {model: Project}
    });
    const scope = scopeData.get({ plain: true });
    
    res.render('scopeId', {
      scope,
      isContractor: req.session.isContractor
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
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
