const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function calculateTotalBonus(employees) {
  let i = 0;
  bonusPercentage = 0;
  let calculateTotalBonus = (employees[i].annualSalary / bonusPercentage);
  for (let employee of employees){
    if (employees.reviewRating >= 2){
      bonusPercentage += 0;
    }
    else if(employees.reviewRating == 3){
      bonusPercentage += 4;
    }
    else if(employees.reviewRating == 4){
      bonusPercentage += 6;
    }
    else if(employees.reviewRating == 5){
      bonusPercentage += 10;
  }
function addNewEmployee (name, bonusPercentage, totalCompensation, totalBonus) {
  
  let newEmployee = {
    name: name,
    bonusPercentage: bonusPercentage,
    totalCompensation: totalCompensation,
    totalBonus: totalBonus 
  }
  newEmployee.push(employees);
return newEmployee;
}
return calculateTotalBonus; 
}
}
calculateTotalBonus(employees);
console.log(employees[0].annualSalary);

console.log( employees );
