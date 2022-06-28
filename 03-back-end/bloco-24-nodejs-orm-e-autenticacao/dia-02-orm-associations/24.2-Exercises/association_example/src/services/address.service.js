const { Address } = require('../models');

module.exports = {
  async getAllEmployeeAddresses (id) {
    const addresses = await Address.findAll({
      where: { employeeId: id }
    });

    return addresses;
  },
};
