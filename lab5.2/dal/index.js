const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/posts', { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) {
        console.log(err);
        process.exit(-1);
    }
    console.log("Connected to the MongoDB Successfully")
});

module.exports = client;