const router = require('express').Router();
const { GeneralContractors, Owner, Project } = require('../../models')


// Get All Owners //
router.get('/owners', async (req, res) => {
    try {

        const userData = await Owner.findAll();

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/gcs', async (req, res) => {
    try {

        const userData = await GeneralContractors.findAll();

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// CREATE new user 
router.post('/', async (req, res) => {
    try {

        let userData;
        let isContractor = false;

        console.log(req.body);
        if (req.body.gcLicense) {
            userData = await GeneralContractors.create({
                username: req.body.gcUsername,
                email: req.body.gcEmail,
                generalContractor: req.body.gcCompanyName,
                license: req.body.gcLicense,
                phoneNumber: req.body.gcNumber,
                password: req.body.gcPassword,
            });

            isContractor = true;

        } else {
            //if it's an owner
            userData = await Owner.create({
                username: req.body.oUsername,
                email: req.body.oEmail,
                firstname: req.body.oFirstname,
                lastname: req.body.oLastname,
                number: req.body.oNumber,
                password: req.body.oPassword,
            });
        }

        req.session.save(() => {


            req.session.isContractor = isContractor;
            req.session.user_id = userData.id;


            res.status(200).json(userData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});



//user login
router.post('/login', async (req, res) => {
    try {
        let validPassword;
        const ownerData = await Owner.findOne({ where: { username: req.body.loginUser } }, {
            include: [{ model: Project }]
        });

        const gcData = await GeneralContractors.findOne(
            {
                where: { username: req.body.loginUser },
                include: [{ model: Project }],
            });

        console.log(gcData);

        if (!ownerData && !gcData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        if (ownerData) {
            validPassword = ownerData.checkPassword(req.body.password);
        } else {
            validPassword = await gcData.checkPassword(req.body.password);
        }
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // if (ownerData){
        //     ownerData = ownerData.get({ plain: true})
        // } else {
        //     gcData = gcData.get({ plain:true})
        // }
        // console.log(ownerData);
        // console.log(gcData);

        // const ownerPassword = await ownerData.checkPassword(req.body.password);
        // const gcPassword = await gcData.checkPassword(req.body.password);

        // if (!ownerPassword && !gcPassword) {
        //     res
        //         .status(400)
        //         .json({ message: 'Incorrect email or password, please try again' });
        //     return;
        // }

        console.log("Success. Logged In");

        req.session.save(() => {

            if (ownerData) {
                req.session.isContractor = false;
                req.session.user_id = ownerData.id;
                req.session.logged_in = true;
                res.json({ user: ownerData, message: 'You are now logged in!' });
            } else {
                req.session.isContractor = true;
                req.session.user_id = gcData.id;
                req.session.logged_in = true;
                res.json({ user: gcData, message: 'You are now logged in!' });
            }

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