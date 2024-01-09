// connectMongoDB.js

const mongoose = require('mongoose');
const User = require('./userData');

async function connectMongoDB(params) {
    try {
        console.log('Connecting to MongoDB Atlas...');
        const uri = 'mongodb+srv://abdulkadirk059:tuS1FShnLOGcxlFj@cluster0.ylnwdd2.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB Atlas URI
        await mongoose.connect(uri, {
            // Connection options
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
            serverSelectionTimeoutMS: 30000, // Increase server selection timeout (example: 30 seconds)
            socketTimeoutMS: 45000 // Increase socket timeout (example: 45 seconds)
        });

        console.log('Connected to MongoDB Atlas');

        // Create a new User document using the provided params
        // const newUser = new User({
        //     id: params.id,
        //     location: params.location,
        //     isAvailable: params.isAvailable
        //     // Assign other fields accordingly
        // });

        //creating user and  email into database...
        
        const newUser =  await User.create({
            name: "Abdul Kadir Khan Yousufzai",
            email: "abdulkadirk059@gmail.com"
        });

        // Save the new User document to the database
        await newUser.save();

        console.log('User data stored in MongoDB');

        return mongoose.connection; // Return the Mongoose connection object
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas:', error.message);
        throw error;
    }
}

module.exports = connectMongoDB;
