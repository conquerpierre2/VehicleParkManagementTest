/* eslint-disable linebreak-style */
class Vehicle {
  longitude;

  latitude;

  vehicleId;

  constructor(long, lat, vehicleId) {
    this.longitude = long;
    this.latitude = lat;
    this.vehicleId = vehicleId;
  }
}

exports.Vehicle = Vehicle;
