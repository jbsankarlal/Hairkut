const Service = require('../models/serviceModel')
const express = require('express');

const { createService, updateService, deleteService, getService, getAllService} = require('../controllers/serviceController');
const { verifyUser } = require('../utils/verifyToken');

const router = express.Router();

//create
router.post('/' ,createService);

//update
router.put('/:id', verifyUser , updateService);

//delete

router.delete('/:id', verifyUser, deleteService);
   
//get

router.get('/find/', getService);

//get all

router.get('/', getAllService);


module.exports = router;