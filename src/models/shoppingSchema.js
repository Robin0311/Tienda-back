const mongoose =  require ('mongoose')
const shoppingSchema = mongoose.Schema(
    {
        Buyer: { type: String, require: true},
        Product: { type: String, require: true},
        qty: { type: Number, require: true},
        date: { type: String, require: true},
    }
)
const Shopping = mongoose.model('shopping', shoppingSchema)
module.exports = Shopping