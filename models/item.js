const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Item Schema
 */
const itemSchema = new Schema({
    itemName: {
        type: String,
        required: [true, "item name not provided "],
    },
    type: {
        type: String,
        enum: ["checkbox", "value"],
        default: "checkbox"
    },
    value: {
        type: Schema.Types.Mixed,
        required: true,
        default: false
    },
    changed: {
        type: Date,
        default: Date.now
    },
    changed_by: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
});

module.exports = mongoose.model('Item', itemSchema);