const express = require("express");
const router = express.Router();
const consultRoute = require("./projects");

router.get("/", (req: any, res: any) => {
  res.send("Welcome");
});

router.use("/project", consultRoute);
// router.use("/auth", authRoute);

module.exports = router;

//tester
