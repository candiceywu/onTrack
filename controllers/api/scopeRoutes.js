const router = require('express').Router();
const { Scope } = require('../../models')




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
  
  // PUT scopes
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