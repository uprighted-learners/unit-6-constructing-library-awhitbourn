// Import MongoClient and ObjectId
const { MongoClient, ObjectId } = require('mongodb');

//Set up Library class constructor
class Library {
    constructor(dbUrl, dbName, collName) {
        this.dbUrl;
        this.dbName = dbName;
        this.collName = collName;
        this.dbClient = null;
    }
    async client() {
        console.log(`Connecting to ${this.dbUrl}...`)
        this.dbClient = MongoClient.connect(this.dbUrl)
        console.log("Connected to database.");
        return this.dbClient;
      }
      async test() {
        const client = await this.client()
        client.close()
      }
}

module.exports = Library;