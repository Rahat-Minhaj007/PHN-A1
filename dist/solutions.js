"use strict";
const multiplyValue = (value, multiplier = 2) => {
    return value * multiplier;
};
const processInput = (input) => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    else if (typeof input === "number") {
        return input * 10;
    }
    else {
        return input ? "Active" : "Inactive";
    }
};
const formatCoordinate = (coordinate) => {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};
const concatenateArrays = (...array) => {
    const newArr = [];
    array.forEach((elementArray) => {
        for (let i = 0; i < elementArray.length; i++) {
            const val = elementArray[i];
            newArr.push(val);
        }
    });
    return newArr;
};
const getPopularCourses = (courses, minStudents) => {
    const output = courses.filter((course) => course.students >= minStudents && course.isPublished);
    return output;
};
const pluckValues = (items, key) => {
    const returnArray = items.map((obj) => obj[key]);
    return returnArray;
};
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
}
const validateAgeAsync = async (age) => {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        }
        else {
            reject(new Error("Access Denied: Must be 18 or older"));
        }
    });
};
