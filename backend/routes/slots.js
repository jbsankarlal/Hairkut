const express = require('express');
const { verifyAdmin } = require('../utils/verifyToken');
const {createSlot, updateSlot, deleteSlot, getSlot, getAllSlot, getSlotData} = require('../controllers/slotControllers')

const router = express.Router();

//create
router.post('/:saloonId' , createSlot);

//update
router.put('/:id', verifyAdmin , updateSlot);

//delete

router.delete('/:id/:saloonId', verifyAdmin , deleteSlot);
   
//get
router.get('/details/:id', getSlotData);
router.get('/:id', getSlot);


//get all slots

router.get('/', getAllSlot);

module.exports = router;