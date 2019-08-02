const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
    _id: String,
    archived: Boolean,
    boxSize: Number,
    category: String,
    deliveryDays: {
        friday: Boolean,
        monday: Boolean,
        saturday: Boolean,
        thursday: Boolean,
        tuesday: Boolean,
        wednesday: Boolean
    },
    description: String,
    fisherId: String,
    hidden: Boolean,
    imageUrl: String,
    leadTime: Number,
    name: String,
    productId: String,
    purchasePrice: Number,
    minQuantity: Number,
    regionId: String,
    selectedDay: String,
    timestamp: Number,
    trackingId: String,
    unitQuantity: String,
    orderQuantity: Number
});

module.exports = mongoose.model('Product', Product);
