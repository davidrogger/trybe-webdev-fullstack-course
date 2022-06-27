const { Router } = require('express');
const employeeController = require('../controllers/employee.controller');

const employeeRouter = Router();

employeeRouter.get('/', employeeController.getAll);
employeeRouter.get('/:id', employeeController.getById);

module.exports = employeeRouter;