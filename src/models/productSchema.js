const mongoose =  require ('mongoose')
const productSchema = mongoose.Schema(
    {
        name: { type: String, require: true},
        type: { type: String, require: true},
        price: { type: Number, require: true},
        description: { type: String, require: true},
        photo: {type: String, require: true}
    }
)
const Product = mongoose.model('product', productSchema)
module.exports = Product