const express = require('express');
const router = express.Router();
const Homecontroller = require('../controller/home');
const Aboutcontroller = require('../controller/about_us');
const Contactcontroller = require('../controller/contact_us');
const Helpcontroller = require('../controller/help');
const Profilecontroller = require('../controller/profile');

router.get('/', Homecontroller.home);
router.get('/about_us', Aboutcontroller.about_us);
router.get('/contact_us', Contactcontroller.contact_us);
router.get('/help', Helpcontroller.help);
router.get('/profile', Profilecontroller.profile);

module.exports = router;