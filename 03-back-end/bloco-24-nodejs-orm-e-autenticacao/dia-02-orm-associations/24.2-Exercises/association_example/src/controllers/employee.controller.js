const Employee = require('../services/employee.service');

const employeeController = {
  async getAll (_req, res) {
    const employees = await Employee.getAll();
    res.status(200).json(employees);
  },
  async getById (req, res) {
    const { id } = await Employee.validateId(req.params);
  },
};

module.exports = employeeController;