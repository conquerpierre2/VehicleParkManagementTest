/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
const { ObjectId } = require('mongodb');
const { DatabaseProvider } = require('../DatabaseProvider');
const { VehicleRepository } = require('./VehicleRepository');

class FleetRepository {
  database = new DatabaseProvider().getDatabase();

  fleets = [];

  vehicleRepository = new VehicleRepository();

  fleetCollection;

  constructor() {
    this.fleetCollection = this.database.collection('fleets');
  }

  async insertFleet(userId) {
    this.getFleetCollection().insertOne({
      vehicles: [],
    }).then((result) => {
      const id = result.insertedId;
      const resultId = id;
      console.log(id.toString());
      console.log('Fleet created');
      this.database.collection('users').updateOne({ _id: ObjectId(userId) }, { $set: { fleetId: resultId.toString() } })
        .then(() => { process.exit(0); });
    }).catch((error) => {
      console.log(error);
      process.exit(1);
    });
  }

  getFleetCollection() {
    return this.fleetCollection;
  }

  async registerVehicle(fleetId, vehicleId) {
    const vehicle = await this.vehicleRepository.findById(vehicleId);
    this.fleetCollection.updateOne({ _id: ObjectId(fleetId) }, {
      $push: {
        vehicles: {
          _id: vehicle._id,
          longitude: vehicle.longitude,
          latitude: vehicle.latitude,
        },
      },
    })
      .then(() => {
        console.log('the vehicle has been registered');
        process.exit(0);
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  }

  getFleetById(fleetId) {
    return this.fleetCollection.findOne(ObjectId(fleetId));
  }
}

exports.FleetRepository = FleetRepository;
