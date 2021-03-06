const router = require('express').Router();
const { Scope, Project } = require('../../models')


//POST route for new scope
router.post('/', async (req, res) => {
  try {
    console.log(req.body);
    const newScope = await Scope.create({
      title: req.body.title,
      description: req.body.description,
      is_complete: req.body.is_complete,
      picture: req.body.picture,
      project_id: req.body.projectStoreId,
    });

    res.status(200).json(newScope);
  } catch (err) {
    res.status(400).json(err);
  }
});

// PUT scopes
router.put('/:id', async (req, res) => {
  try {
    console.log(req.body);
    const gcData = await Scope.update(
      { 
        title: req.body.editTitle,
        description: req.body.editDescription,
        is_complete: req.body.status,
        picture: req.body.picture,
      },
      {
        where: {
        id: req.params.id
      },
      // individualHooks: true
    });
    if (!gcData) {
      res.status(404).json({ message: 'Sorry, you can\'t modify this data.' });
      return;
    } res.status(200).json(gcData);
  } catch (err) {
    res.status(500).json(err)
  };
});


//Delete Scopes

router.delete('/:id', async (req, res) => {
  try {

    const gcData = await Scope.destroy(
      {
        where: { 
          id: req.params.id
        },
    });
    if (!gcData) {
      res.status(404).json({ message: 'Sorry, you can\'t modify this data.' });
      return;
    } res.status(200).json(gcData);
  } catch (err) {
    res.status(500).json(err)
  };
});

// //GET all scopes on dashboard
router.get('/', async (req, res) => {
  try {
    // Get all scopes, sorted by name
    const scopeData = await Scope.findAll();
      // Serialize user data so templates can read it
      const scopes = scopeData.map((scope) => scope.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.json(scopes);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // GET one scope
// //need to create an option for gc to edit a scope
// router.get('/:id', async (req, res) => {
//     // If the user is logged in, allow user to view the scope
//     try {
//       const scopeData = await Scope.findByPk(req.params.id, {
//         include: {model: Project}
//       });
//       const scope = scopeData.get({ plain: true });
      

//       //res.json(scope);
//       res.render('scopeId', {
//         scope,
//         isContractor: req.session.isContractor
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
  
// });



module.exports = router;