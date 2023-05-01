const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const Item = require('./item')

/**
 * List Schema
 */
const listSchema = new Schema({
    listName: {
        type: String,
        required: [true, "list name not provided "],
    },
    items: {
        type: [Item.schema],
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
});

module.exports = mongoose.model('List', listSchema);