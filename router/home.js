const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  const validToken = isValidToken(req.header("x-api-key"));
  if (!validToken) {
    res.status(400).send("Token faild");
    return
  }

  res.status(200).send("Home page");
});

function isValidToken(key) {
  return key === process.env.KEY;
}

module.exports = router;
