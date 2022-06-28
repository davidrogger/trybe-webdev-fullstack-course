const Sequelize = require('sequelize');
const Address = require('../services/address.service');
const Employee = require('../services/employee.service');

const config = require('../config/config');
const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test' ? config.test : config.development
  );

const employeeController = {
  async getAll (_req, res) {
    const employees = await Employee.getAll();
    res.status(200).json(employees);
  },
  async getById (req, res) {
    const { id } = await Employee.validateId(req.params);
    const employee = await Employee.getById(id);

    // Lazy Loading
    if (req.query.includeAddresses === 'true') {
      const addresses = await Address.getAllEmployeeAddresses(id);
      res.status(200).json({  employee, addresses });
      return;
    }

    res.status(200).json(employee);
  },
  async create (req, res) {
    const transaction = await sequelize.transaction();

    try {
      const employee = await Employee.create({...req.body, transaction});
      await Address.create({...req.body, employeeId: employee.id, transaction });
  
      await transaction.commit();
      return res.status(201).json({
        id: employee.id,
        message: 'Sucessfully register!',
      });
      
    } catch (error) {
      await transaction.rollback();
      return res.status(500).json({ message: 'something went wrong' });
    }
    
  },
};

module.exports = employeeController;