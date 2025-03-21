// 1- Create the constructor function
function Employee(name, age, department, salary) {
    this.name = name;
    this.age = age;
    this.department = department;
    var _salary;

    this.setSalary = function (value) {
        if (value > 0) {
            _salary = value;
        } else {
            alert("Salary can't be 0 or less");
        }
    };

    this.setSalary(salary);

    this.getSalary = function () {
        return _salary;
    };

    this.printData = function () {
        console.log("Name: ", this.name, '\n', "Age: ", this.age, '\n', "Department: ", this.department, '\n', "Salary: ", this.getSalary());
    };
};

// 2- Get the number of employees from the user
var getArrSize = function () {
    while (true) {
        var promptNumEmp = Number(prompt("Enter the number of employees: "));

        if (isNaN(promptNumEmp) || promptNumEmp === "" || Number(promptNumEmp) <= 0) {
            alert("Invalid! add a number only");
            continue;
        } else {
            return Number(promptNumEmp);
        }
    };
};
var numEmpArr = getArrSize();

// 3- Take employees data from the user
var employees = [];
var addEmployees = function () {
    while (employees.length < numEmpArr) {
        var promptAddEmp = prompt("Add employees data accordingly => Name, Age, Department, Salary (type done to stop)");

        if (promptAddEmp == "") {
            alert("Can't be empty!");
            continue;
        }

        if (promptAddEmp.toLowerCase() == "done") {
            break;
        };

        var empData = promptAddEmp.trim().split(",");

        if (empData.length !== 4) {
            alert("You added more or less data, add according to => Name, Age, Department, Salary")
            continue;
        }

        var name = empData[0].trim();
        var age = Number(empData[1].trim());
        var department = empData[2].trim();
        var salary = Number(empData[3].trim());

        if (isNaN(name) === false || age <= 0 || isNaN(age) || department === "" || salary <= 0 || isNaN(salary)) {
            alert("One or more incorrect fields, try again!");
            continue;
        }

        var emp = new Employee(name, age, department, salary);
        employees.push(emp);
    }
    console.log(employees);
};
addEmployees()

// 4- Sort employees by Name or Age Department
var sortEmployees = function (propertyName) {
    employees.sort(function (a, b) {
        if (a[propertyName] > b[propertyName]) {
            return 1;
        } else if (a[propertyName] < b[propertyName]) {
            return -1;
        } else {
            return 0;
        }
    })
};

// Allow user to choose the sort by
var sortBy = prompt("Do you want to sort employees? (Y/N)");
if (sortBy.toLowerCase().trim() === "y") {
    var pickSort = prompt("Sort by: Name / Age / Department (Enter one):");
    if (pickSort.toLowerCase().trim() === "name") {
        sortEmployees('name');
        console.log("Sorted Employees by name: ", employees);
    } else if (pickSort.toLowerCase().trim() === "age") {
        sortEmployees('age');
        console.log("Sorted Employees by age: ", employees);
    } else if (pickSort.toLowerCase().trim() === "department") {
        sortEmployees('department');
        console.log("Sorted Employees by department: ", employees);
    }
} else {
    alert("No sorting!");
};

// 5- Display all data of employees with salary > 2000 
var filterHighSalary = function (arr) {
    var highSalaryEmp = arr.filter(function (emp) {
        return emp.getSalary() > 2000
    });

    highSalaryEmp.forEach(function (emp) {
        emp.printData();
    })
};
filterHighSalary(employees);

// 6- Total and Average salaries
var displayTotalAndAvg = function (arr) {
    var totalSalaries = 0;
    for (var i = 0; i < arr.length; i++) {
        totalSalaries += arr[i].getSalary();
    }

    var averageSalaries = totalSalaries / arr.length;
    console.log("Total: " + totalSalaries, "Average: " + averageSalaries);
};
displayTotalAndAvg(employees);

// 7- Highest salary in each department
var highestSalaryPerDep = function (arr) {
    var highestSalaries = {};

    for (var i = 0; i < arr.length; i++) {
        var tempEmployeeObj = arr[i];
        var tempDepartment = tempEmployeeObj.department;
        var tempSalary = tempEmployeeObj.getSalary();

        if (highestSalaries[tempDepartment] === undefined || tempSalary > highestSalaries[tempDepartment]) {
            highestSalaries[tempDepartment] = tempSalary;
        }
    }
    console.log("Highest salaries in each department:", highestSalaries);
};
highestSalaryPerDep(employees);


