const express = require("express");
const { verifyAdmin } = require("../utils/verifyToken");
const {
  createSlot,
  updateSlot,
  deleteSlot,
  getAllSlot,
  getSlotData,
  getSlots,
  getSlotss,
} = require("../controllers/slotControllers");

const router = express.Router();

//create
router.post("/", createSlot);

//update
router.put("/:id", updateSlot);

//delete

router.delete("/:id", deleteSlot);

//get
router.get("/details/:id", getSlotData);
// router.get("/:id", getSlot);

//get all slots

router.get("/", getAllSlot);

router.get("/get-slots", getSlotss);

module.exports = router;
