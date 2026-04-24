const { Schema, model } = require("mongoose")
const productSchema = new Schema( {
 name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    // required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    required: true
  },
  discount:{
    type:Number,
    default:0
  },
  brand: {
    type: String
  },
  stock: {
    type: Number,
    // required: true,
    default: 0
  },
  image: {
    type:String
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  numReviews: {
    type: Number,
    default: 0
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = model('products',productSchema)