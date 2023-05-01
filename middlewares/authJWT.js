const jwt = require("jsonwebtoken");
const {ApiResponse} = require("../models/ApiResponse");
User = require("../models/user");

const verifyToken = (req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], process.env.API_SECRET, async function (err, decode) {
            if (err) req.user = undefined;
             try {
            req.user = await User.findOne({
                _id: decode.id
            }).exec();
            console.log(`Authorized: ${req.user.fullName} ${req.user._id}`)
            next();
            } catch (err) {
                res.status(500);
                res.send(new ApiResponse(err, true, "Invalid credentials"));
            }

        });
    } else {
        req.user = undefined;
        next();
    }
};
module.exports = verifyToken;