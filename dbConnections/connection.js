
const { MongoClient, ServerApiVersion } = require('mongodb');
const User = require('./userData');
const uri = "mongodb+srv://abdulkadirk059:tuS1FShnLOGcxlFj@cluster0.ylnwdd2.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 30000, // Increase server selection timeout (example: 30 seconds)
        socketTimeoutMS: 45000 // Increase socket timeout (example: 45 seconds)
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        await User.create({
            name: "Abdul Kadir Khan Yousufzai",
            email: "abdulkadirk059@gmail.com"
        });
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


///reference for node js and mongodb channel
// Programming  Experience 
