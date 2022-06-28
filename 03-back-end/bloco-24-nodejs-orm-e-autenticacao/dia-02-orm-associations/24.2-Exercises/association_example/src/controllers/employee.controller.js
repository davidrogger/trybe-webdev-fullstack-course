const Employee = require('../services/employee.service');

const employeeController = {
  async getAll (_req, res) {
    const employees = await Employee.getAll();
    res.status(200).json(employees);
  },
  async getById (req, res) {
    const { id } = await Employee.validateId(req.params);
    const employee = await Employee.getById(id);
    res.status(200).json(employee);
  },
};

module.exports = employeeController;