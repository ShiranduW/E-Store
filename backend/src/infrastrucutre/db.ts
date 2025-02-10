import mongoose from "mongoose";

// Function for create connection between backend and MongoDB database.
export const connectDB = async () => {
    try {
        
        // const connectionString = process.env.MONGODB_URI;
        // if (!connectionString) {
        //     throw new Error("No connection string found!");
        // }
        // Connection String for Connect MonogoDB Database.
        // This is like URL of website.
        const connectionString = "mongodb+srv://shirandushirandu:OQ0mFNW7I7IjEVqu@cluster0.betvw.mongodb.net/dev?retryWrites=true&w=majority&appName=Cluster0";

        await mongoose.connect(connectionString);
        console.log("Connected to database");
    }catch(error) {
        console.log(error);
        console.log("Error connecting to the Database");
    }
}