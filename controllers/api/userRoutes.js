const router = require('express').Router();
const { GeneralContractors, Owner } = require('../../models')



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
<<<<<<< HEAD
            const ownerData = await Owner.create({
                username: req.body.oUsername,
                email: req.body.oEmail,
                firstName: req.body.oFirstname,
                lastName: req.body.oLastname,
                phoneNumber: req.body.oNumber,
=======
            userData = await Owner.create({
                username: req.body.oUsername,
                email: req.body.oEmail,
                firstname: req.body.oFirstname,
                lastname: req.body.oLastname,
                number: req.body.oNumber,
>>>>>>> c1f045bbd82f1e5b10086ab4090147801c29cb46
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
router.get('/login', async (req, res) => {
    try {
        const ownerData = await Owner.findOne({ where: { oEmail: req.body.email } });
        const gcData = await GeneralContractors.findOne({ where: { gcEmail: req.body.email } });

        if (!ownerData && !gcData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const ownerPassword = await ownerData.checkPassword(req.body.password);
        const gcPassword = await gcData.checkPassword(req.body.password);

        if (!ownerPassword && !gcPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        req.session.save(() => {

            if (ownerData) {
                req.session.isContractor = false;
                req.session.user_id = ownerData.id;
            } else {
                req.session.isContractor = true;
                req.session.user_id = gcData.id;
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