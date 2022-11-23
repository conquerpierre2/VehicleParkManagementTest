/* eslint-disable linebreak-style */
const { ObjectId } = require('mongodb');
const { DatabaseProvider } = require('../DatabaseProvider');
const { FleetRepository } = require('./FleetRepository');

class UserRepository {
  database = new DatabaseProvider().getDatabase();

  users = [];

  fleetRepository = new FleetRepository();

  userCollection;

  constructor() {
    this.userCollection = this.database.collection('users');
  }

  createFleet(userId) {
    if (this.userCollection.findOne(ObjectId(userId))) {
      this.fleetRepository.insertFleet(userId);
    } else {
      console.log('Not found');
      process.exit(1);
    }
  }
}
exports.UserRepository = UserRepository;
