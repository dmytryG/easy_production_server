var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
var User = require("../models/user");
const {ApiResponse} = require("../models/ApiResponse");

exports.signup = async (req, res) => {
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    });

    try {
        await user.save();
        res.status(200)
        res.send(new ApiResponse("Successfully created"));
    } catch (err) {
        res.status(500)
        res.send(new ApiResponse(err, true));
        return;
    }
};

exports.signin = async (req, res) => {
    try {
        let user = await User.findOne({
            email: req.body.email
        }).exec();
        if (!user) {
            res.status(404);
            await res.send(new ApiResponse("User Not found", true));
            return;
        }

        //comparing passwords
        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        // checking if password was valid and send response accordingly
        if (!passwordIsValid) {
            res.status(401)
            res.send(new ApiResponse("Incorrect password", true));
            return;
        }
        //signing token with user id
        let token = jwt.sign({
            id: user.id
        }, process.env.API_SECRET, {
            expiresIn: 86400
        });

        //responding to client request with user profile success message and  access token .
        res.status(200);
        res.send(new ApiResponse({
            user: {
                id: user._id,
                email: user.email,
                fullName: user.fullName,
            },
            message: "Login successfull",
            accessToken: token,
        }, false));
    } catch (err) {
        res.status(500)
        res.send(new ApiResponse(err, true));
        return;
    }
};