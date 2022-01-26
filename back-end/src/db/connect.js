// where we'll be connection to mongodb

import { MongoClient } from 'mongodb';

// when we run mongo on our machine it's always 'mongodb://127.0.0.1:27017'
const url = "mongodb://127.0.0.1:27017";

// when we create the client it will be in this var
let dbClient = null;

// we can pass in the url bellow if we want e.g: async (url)
export const connect = async () => {
    if (dbClient !== null) {
        return dbClient;
    }

    try {
        console.log(`Connecting to mongodb at ${url}`);
        // since the MongoClient returns a promise, we can use await 
        const client = await MongoClient.connect(url, {
            useNewUrlParser: true, //new url parser
            useUnifiedTopology: true, // new connection engine
            maxPoolSize: 10 // how many connections can be made
        });

        dbClient = client;
    } catch (e) {
        console.log(e);
    }
};



// this will allow us to grab the database by the passed in dbName
const getDB = async (dbName) => {
    if (!dbClient) {
        throw new Error('Must call "connect" before calling getDB.')
    }

    return dbClient.db(dbName)
};


// get the collection
export const collection = async (collectionName) => {
    const db = await getDB('q-and-a');

    // if collectionName does not exist, mongoDB will create the collection for us.
    const collection = await db.collection(collectionName);
    return collection;
}