const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const router = require("./routes");
const cors = require("cors");

app.use(cors());

const PORT = process.env.PORT;
const db = process.env.DATABASE_ADDRESS;

mongoose.set("strictQuery", false);
mongoose.connect(db);

// const urlEncoded = bodyParser.urlencoded({ extended: true });

app.use(router);

app.listen(PORT, () => {
	console.log("Server running on port " + PORT);
});
