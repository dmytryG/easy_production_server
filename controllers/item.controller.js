const User = require("../models/user");
const List = require("../models/list")
const Item = require("../models/item")
const {ApiResponse} = require("../models/ApiResponse");

exports.add_item = async (req, res) => {
    if (!req.user) {
        await res.status(403);
        await res.send (
            new ApiResponse("Unauthorized", true)
        );
        return;
    }
    try {
        const list = await List.findOne({
            _id:req.body.list_id
        }).exec();
        if (!list) {
            await res.status(404);
            await res.send (
                new ApiResponse("Not found", true)
            );
            return;
        }
        console.log(`Updating ${list}`)
        list.items.push(new Item({
            itemName: req.body.itemName,
            type: req.body.type,
            value: req.body.value,
            changed_by: req.user._id
        }))
        await list.save();
        res.status(200);
        await res.send(new ApiResponse(list, false, "Created successfully"))
    } catch (err) {
        res.status(500);
        await res.send(new ApiResponse("Something went wrong", true))
    }
}
