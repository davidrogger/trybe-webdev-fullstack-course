const { number } = require('joi');
const { Employee, Address } = require('../models');

const Joi = require('joi');
const runSchema = require('./validate');
const { NotFoundError } = require('../errors');

const employeeService = {
  validateId: runSchema(Joi.object({
    id: Joi.number().integer().required(),
  })),
  async getAll () {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });
    return employees;
  },
  async getById (id) {
    const employee = await Employee.findOne({
      where: { id },
      include: [{
        model: Address, as: 'addresses',
        attributes: { exclude: ['number'] },
      }],
    });

    if (!employee) throw new NotFoundError('"id" not found');

    return employee;
  },
}

module.exports = employeeService;