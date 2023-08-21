// Write your solution in this file!
const employee = {
  name: 'Mohamed',
  streetAddress: 'Chicago'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, ['name']: 'Sam', ["streetAddress"]: "11 Broadway"};
} 

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee.name = 'Sam',
   employee.streetAddress = '12 Broadway'
   return employee;
} 

function deleteFromEmployeeByKey(employee, key) {
  return {...employee.length -1};
} 

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee.name;
  return employee;
}
