const router = require('express').Router();
const { GeneralContractors, Owner } = require('../models');
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

router.get('/projects', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/');
  //   return;
  // }

  res.render('projects');
});


module.exports = router;
