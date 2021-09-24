const router = require('express').Router();
const { User } = require('../../models')



router.get('/', (req, res) => {
    try {
        res.status(200).json({ message: "Route Works" })
    } catch (err) {
        res.status(500).json(err);
    }
});



// CREATE new user 
router.post('/', async (req, res) => {
    try {
        //if it's a contractor
        if (req.body.license) {
            const userData = await Contractor.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                generalContractor: req.body.generalContractor,
                license: req.body.license,
                phoneNumber: req.body.phoneNumber
            });
        } else {
            //if it's an owner
            const userData = await Owner.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                phoneNumber: req.body.phoneNumber
            });
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



//user login
//do we need a conditional for contractor vs owner?
router.get('/login', async (req, res) => {
    try {
        const ownerData = await Owner.findOne({ where: { email: req.body.email } });
        const gcData = await Contractor.findOne({ where: { email: req.body.email } });

        if (!ownerData && !gcData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const ownerPassword = await ownerData.checkPassword(req.body.password);
        const gcPassword = await gcData.checkPassword(req.body.password);

        if (!ownerPassword && !gcPassword ) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id =  {
                if (ownerData.id) {
                    req.session.user_id
                }
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});


//user logout
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;




module.exports = router;