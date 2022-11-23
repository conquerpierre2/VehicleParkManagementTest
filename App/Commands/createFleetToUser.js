/* eslint-disable linebreak-style */
const { UserRepository } = require('../../Infra/Repositories/UserRepository');

class CreateFleetToUser {
  userRepository = new UserRepository();

  createFleetFromUserId(userId) {
    this.userRepository.createFleet(userId);
  }
}

exports.CreateFleetToUser = CreateFleetToUser;
