"use strict";
// 1
// const multiplyValue = (value: number, multiplier: number = 2): number => {
//   return value * multiplier;
// };
const getPopularCourses = (courses, minStudents) => {
    const output = courses.filter((course) => course.students >= minStudents && course.isPublished);
    return output;
};
// Sample Input:
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));
