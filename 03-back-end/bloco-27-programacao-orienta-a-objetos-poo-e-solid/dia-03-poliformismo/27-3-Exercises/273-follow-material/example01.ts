class Employee {
  private static employeeCount = 0;
  constructor(name: string) {
    Employee.addEmployee();
  };

  private static addEmployee() {
    this.employeeCount += 1;
  }

  static get employees(): number {
    return this.employeeCount;
  }
}

console.log(Employee.employees);
const e1 = new Employee('Ronald');
console.log(e1);
console.log(Employee.employees);