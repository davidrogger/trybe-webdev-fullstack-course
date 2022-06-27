const { Employee } = require('../models');

const employeeService = {
  async getAll () {
    const employees = await Employee.findAll();
    return employees;
  },
}

module.exports = employeeService;