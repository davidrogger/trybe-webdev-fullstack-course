const { Address } = require('../models');

module.exports = {
  async getAllEmployeeAddresses (id) {
    const addresses = await Address.findAll({
      where: { employeeId: id }
    });

    return addresses;
  },
  async create ({ city, street, number, employeeId, transaction }) {
    const address = await Address.create(
      { city, street, number, employeeId },
      { transaction },
    );
    return address;
  },
};
