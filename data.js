var R = require('ramda');
var faker = require('faker');
var nLoop = R.range(0);
const fs = require('fs')

function department() {
  return {
    department: faker.commerce.department()
  };
}

function aPerson() {
    return {
      id: faker.random.uuid(),
      name: faker.name.firstName(),
      lastName: faker.name.lastName()
    };
  }

var departmentData = {
    departments: nLoop(5).map(department)
};

var employeeData = {
    employees: nLoop(20).map(aPerson)
};

fs.writeFileSync('dep.json', JSON.stringify(departmentData, null, 2), 'utf-8');
fs.writeFileSync('emp.json', JSON.stringify(employeeData, null, 2), 'utf-8');

const dep = fs.readFileSync('./dep.json', 'utf-8')
const emp = fs.readFileSync('./emp.json', 'utf-8')

console.log(dep, emp)


const data = Object.assign(JSON.parse(dep), JSON.parse(emp))


fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf-8');