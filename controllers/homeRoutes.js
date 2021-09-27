const router = require('express').Router();
const { GeneralContractors, Owner, Project } = require('../models');
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

router.get('/projects', async (req, res) => {
  try {
      
      // const ownerData = await Owner.findOne({ where: { username: req.body.loginUser } }, {
      //     include: [ {model: Project}]
      // });

      // const gcData = await GeneralContractors.findOne(
      //     { where: { username: req.body.loginUser },
      //     include: [ {model: Project}],
      // });
      
      // console.log(gcData);

      // if (!ownerData && !gcData) {
      //     res
      //         .status(400)
      //         .json({ message: 'Incorrect email or password, please try again' });
      //     return;
      // }

      // // if (ownerData){
      // //     ownerData = ownerData.get({ plain: true})
      // // } else {
      // //     gcData = gcData.get({ plain:true})
      // // }

      // console.log(ownerData);
      // console.log(gcData);

      // if (ownerData) {
      //     //res.render('projects', { ownerData })
      //     res.json(ownerData);
      // } else {
          
      //     res.json(gcData);
      // } 
      
      res.render('projects', { 
        isContractor: req.session.isContractor,
        userInfo: req.session.userInfo,
        logged_in: req.session.logged_in,
       })
      

  } catch (err) {
      res.status(400).json(err);
  }
});



//scope
router.get('/scope', async (req, res) => {
  try {
      res.render('scope', { 
        isContractor: req.session.isContractor,
        userInfo: req.session.userInfo,
        logged_in: req.session.logged_in,
       })
    
  } catch (err) {
      res.status(400).json(err);
  }
});


module.exports = router;
