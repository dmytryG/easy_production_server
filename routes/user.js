var express = require("express"),
    router = express.Router(),
    verifyToken = require('../middlewares/authJWT'),
    {
        signup,
        signin
    } = require("../controllers/auth.controller.js"),
    {
        new_list
    } = require("../controllers/list.controller");

router.post("/register", signup, function (req, res) {

});

router.post("/login", signin, function (req, res) {

});

router.post("/list", verifyToken, async function(req, res) {
    await new_list(req, res);
});

module.exports = router;

