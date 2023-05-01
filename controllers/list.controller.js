var User = require("../models/user");
const {ApiResponse} = require("../models/ApiResponse");

exports.new_list = async (req, res) => {
    if (!req.user) {
        await res.status(403);
        await res.send (
            new ApiResponse("Unauthorized", true)
        );
        return;
    }

}
