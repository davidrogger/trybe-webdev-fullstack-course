const { number } = require('joi');
const { Employee } = require('../models');

const Joi = require('joi');
const runSchema = require('./validate');

const employeeService = {
  validateId: runSchema(Joi.object({
    id: number().integer().required(),
  })),
  async getAll () {
    const employees = await Employee.findAll();
    return employees;
  },
}

module.exports = employeeService;