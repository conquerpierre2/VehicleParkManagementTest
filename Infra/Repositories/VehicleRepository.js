/* eslint-disable linebreak-style */
const { ObjectId } = require('mongodb');
const { DatabaseProvider } = require('../DatabaseProvider');

class VehicleRepository {
  database = new DatabaseProvider().getDatabase();

  vehicles = [];

  vehicleCollection;

  constructor() {
    this.vehicleCollection = this.database.collection('vehicles');
  }

  locate(long, lat, fleetId, vehicleId) {
    this.vehicleCollection.updateOne(
      { _id: ObjectId(vehicleId) },
      { $set: { longitude: long, latitude: lat } },
    )
      .then(() => {
        this.database.collection('fleets').updateOne(
          { _id: ObjectId(fleetId), 'vehicles._id': ObjectId(vehicleId) },
          { $set: { 'vehicles.$.longitude': long, 'vehicles.$.latitude': lat } },
        );
        console.log('the vehicle has been parked');
        process.exit(0);
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  }

  findById(vehicleId) {
    try {
      const vehicle = this.vehicleCollection.findOne(ObjectId(vehicleId));
      return vehicle;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
exports.VehicleRepository = VehicleRepository;
