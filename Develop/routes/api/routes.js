const router = require('express').Router();
const locationRoute = require('./locationRoute');
const travelerRoute = require('./travelerRoute');
const tripRoute = require('./tripRoute');

router.use('/location', locationRoute);
router.use('/traveler', travelerRoute);
router.use('/trip', tripRoute);

module.exports = router;