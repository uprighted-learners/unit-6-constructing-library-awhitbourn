// client.js
const Library = require('./library'); // Import the Library class

// MongoDB connection string, database name, and collection name
const dbUrl = 'mongodb://localhost:27017'; // Change this to your MongoDB connection string
const dbName = 'library';
const collName = 'books';

// Instantiate the Library class
const collection = new Library(dbUrl, dbName, collName);

// Test the connection
async function testConnection() {
    await collection.connect(); // Establish the connection
}

testConnection();
