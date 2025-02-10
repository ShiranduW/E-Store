// Mongoose package for create connection between backend and MongoDB database.
import mongoose from "mongoose";

// Create a schema for Product entity to show structure of product document in MoongoDB.
const ProductSchema = new mongoose.Schema ({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true,
    },
    image: {
        type: String,
        required: true,
    },
    name: {
    type: String,
    required: true,
},
price: {
    type: String,
    required: true,
},
description: {
    type: String,
    required: true,
},

});

// Product represent a entity of products collection.
export default mongoose.model("Product", ProductSchema);