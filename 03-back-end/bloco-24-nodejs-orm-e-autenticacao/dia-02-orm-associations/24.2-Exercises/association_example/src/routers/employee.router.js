const { Router } = require('express');
const employeeController = require('../controllers/employee.controller');

const employeeRouter = Router();

employeeRouter.get('/', employeeController.getAll);

module.exports = employeeRouter;