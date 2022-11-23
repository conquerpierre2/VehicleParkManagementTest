/* eslint-disable linebreak-style */
const { MongoClient } = require('mongodb');
require('dotenv').config();

class DatabaseProvider {
  db;

  constructor() {
    const client = new MongoClient(process.env.URI);
    this.db = client.db('VehicleParkManagementTest');
  }

  getDatabase() {
    return this.db;
  }
}

exports.DatabaseProvider = DatabaseProvider;
