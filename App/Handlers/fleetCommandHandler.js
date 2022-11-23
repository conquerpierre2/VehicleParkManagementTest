/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */

class FleetCommandHandler {
  handleRegistering(addVehicleToFleetCommand, fleetId, vehicleId) {
    addVehicleToFleetCommand.addVehicle(fleetId, vehicleId);
  }

  handleCreating(createFleetToUser, userId) {
    createFleetToUser.createFleetFromUserId(userId);
  }
}

exports.FleetCommandHandler = FleetCommandHandler;
