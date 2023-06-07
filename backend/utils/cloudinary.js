require("dotenv").config();
let cloudinary = require('cloudinary').v2

 cloudinary.config({
     cloud_name: "ddhfrfokz",
     api_key: "587961818262952",
     api_secret: "IqalLRiKJERZ8u6Ior6nezaDAks",
     //secure: true
});

module.exports = cloudinary