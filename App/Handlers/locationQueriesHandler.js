/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
class LocationQueriesHandler {
  handle(checkVehicleLocationWithAnother, vehicleId, long, lat) {
    return checkVehicleLocationWithAnother.check(vehicleId, long, lat);
  }
}

exports.LocationQueriesHandler = LocationQueriesHandler;
