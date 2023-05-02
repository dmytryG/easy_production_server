var express = require("express"),
    router = express.Router(),
    verifyToken = require('../middlewares/authJWT'),
    {
        signup,
        signin
    } = require("../controllers/auth.controller.js"),
    {
        new_list,
        get_list,
        delete_list,
        update_list
    } = require("../controllers/list.controller"),
    {
        add_item
    } = require("../controllers/item.controller");

router.post("/register", signup, function (req, res) {

});

router.post("/login", signin, function (req, res) {

});

router.post("/list", verifyToken, async function(req, res) {
    await new_list(req, res);
});

router.get("/list/:id", verifyToken, async function(req, res) {
    await get_list(req, res);
});

router.delete("/list/:id", verifyToken, async function(req, res) {
    await delete_list(req, res);
});

router.patch("/list/:id", verifyToken, async function(req, res) {
    await update_list(req, res);
});

router.post("/item", verifyToken, async function(req, res) {
    await add_item(req, res);
});

module.exports = router;

