// Mongoose package for create connection between backend and MongoDB database.
import mongoose from "mongoose";

// Create a schema for Product entity to show structure of product document in MoongoDB.
const CategroySchema = new mongoose.Schema ({
    
    name: {
    type: String,
    required: true,
}

});

// Product represent a entity of products collection.
export default mongoose.model("Category", CategroySchema);