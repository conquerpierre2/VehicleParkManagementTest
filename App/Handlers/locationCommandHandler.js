/* eslint-disable linebreak-style */

class LocationCommandHandler {
  // eslint-disable-next-line class-methods-use-this
  handle(parkVehicle, long, lat, fleetId, vehicleId) {
    parkVehicle.park(long, lat, fleetId, vehicleId);
  }
}

exports.LocationCommandHandler = LocationCommandHandler;
