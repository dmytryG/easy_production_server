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

exports.get_list = async (req, res) => {
    if (!req.user) {
        await res.status(403);
        await res.send (
            new ApiResponse("Unauthorized", true)
        );
        return;
    }
    try {
        const list = await List.findOne({_id: req.params.id});
        if (!list) {
            res.status(404);
            await res.send(new ApiResponse("Not found", true))
        } else {
            res.status(200);
            await res.send(new ApiResponse(list, false))
        }
    } catch (err) {
        res.status(500);
        await res.send(new ApiResponse("Something went wrong", true))
    }
}

exports.delete_list = async (req, res) => {
    if (!req.user) {
        await res.status(403);
        await res.send (
            new ApiResponse("Unauthorized", true)
        );
        return;
    }
    try {
        const list = await List.findOne({_id: req.params.id});
        if (!list) {
            res.status(404);
            await res.send(new ApiResponse("Not found", true));
            return;
        }
        if (req.user._id.equals(list.creator) || req.user.status === "admin") {
            await List.deleteOne({_id: req.params.id}).exec();
            res.status(200);
            await res.send(new ApiResponse("Ok", false));
            return;
        }
        res.status(403);
        await res.send(new ApiResponse("Low permissions", true));
        return;
    } catch (err) {
        res.status(500);
        await res.send(new ApiResponse("Something went wrong", true))
    }
}
