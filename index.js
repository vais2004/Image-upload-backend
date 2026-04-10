const express = require("express");
const { initializeDatabase } = require("./db.connect");
const multer = require("multer");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

initializeDatabase();
