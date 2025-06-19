const express = require('express');
const router = express.Router();
const { addLead, getLeads } = require('../controllers/leadController');
const validateRequest=require("../middleware/validateRequest")

router.post('/leads', validateRequest("Lead"), addLead);
router.get('/leads', getLeads);

module.exports = router;