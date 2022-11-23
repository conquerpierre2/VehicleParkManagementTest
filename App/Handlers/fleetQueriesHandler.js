/* eslint-disable linebreak-style */
class FleetQueriesHandler {
  // eslint-disable-next-line class-methods-use-this
  handle(checkVehicleIncludedToFleet, fleetId, vehicleId) {
    return checkVehicleIncludedToFleet.check(fleetId, vehicleId);
  }
}

exports.FleetQueriesHandler = FleetQueriesHandler;
