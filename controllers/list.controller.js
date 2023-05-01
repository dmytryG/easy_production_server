const User = require("../models/user");
const List = require("../models/list")
const {ApiResponse} = require("../models/ApiResponse");

exports.new_list = async (req, res) => {
    if (!req.user) {
        await res.status(403);
        await res.send (
            new ApiResponse("Unauthorized", true)
        );
        return;
    }
    try {
        const list = new List({
            listName: req.body.listName,
            creator: req.user._id
        });
        await list.save();
        res.status(200);
        await res.send(new ApiResponse(list, false, "Created successfully"))
    } catch (err) {
        res.status(500);
        await res.send(new ApiResponse("Something went wrong", true))
    }
}
