const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
  updateUserStatus,
} = require("../controllers/userControllers");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");
const User = require("../models/userModel");
const Booking = require("../models/bookingsModel");
const dotenv = require("dotenv");
dotenv.config();
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.post("/get-report", async (req, res) => {
  console.log(req.body, "bodyyyyyyyyyyyyyyyyyy");
  try {
    const data = await Booking.aggregate([
      {
        $match: {
          date: {
            $gte: new Date(req.body.fromDate),
            $lte: new Date(req.body.toDate),
          },
        },
      },
      {
        $group: {
          _id: {
            saloon: "$saloon",
            month: { $month: "$date" },
          },
          count: { $sum: "$count" },
          amount: { $sum: "$amount" },
          totalValues: { $sum: { $multiply: ["$count", "$value"] } },
        },
      },
      {
        $project: {
          _id: 0,
          saloon: "$_id.saloon",
          month: "$_id.month",

          count: 1,
          amount: 1,
          totalValues: 1,
        },
      },
    ]);

    console.log(data, "666666666666666666666666666");
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

router.get("/get-bookings/:username", async (req, res) => {
  try {
    const data = await Booking.find({ name: req.params.username });
    console.log(data, "data---");
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get("/get-all-bookings/:saloon", async (req, res) => {
  try {
    const data = await Booking.find({ saloon: req.params.saloon });
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.get("/get-all-bookings", async (req, res) => {
  console.log("got bookined");
  try {
    const data = await Booking.find()
      .skip((req.query.page - 1) * req.query.limit)
      .limit(req.query.limit);
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

router.post("/payment", async (req, res, next) => {
  let status, error;
  const { token, amount } = req.body;

  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();

    await Stripe.charges.create({
      source: token.id,
      amount,
      currency: "usd",
    });
    status = "success";
  } catch (error) {
    console.log(error, "iam stripe error");
    status = "failure";
  }
  res.json({ error, status });
});

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are authenticated");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in & can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello Admin, you are logged in & can delete all account");
});

//create
router.post("/", createUser);

//update
router.put("/:id", updateUser);
router.put("/status/:id", updateUserStatus);

//delete
router.delete("/:id", verifyUser, deleteUser);

//get
router.get("/:id", verifyUser, getUser);

//get all
router.get("/", getAllUser);

module.exports = router;
