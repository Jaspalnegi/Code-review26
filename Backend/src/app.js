const express = require("express");
const aiRoutes = require("./routes/ai.route");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Code Reviewer API is running",
  });
});

app.use("/ai", aiRoutes);

module.exports = app;