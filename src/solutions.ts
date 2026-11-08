// 1
// const multiplyValue = (value: number, multiplier: number = 2): number => {
//   return value * multiplier;
// };

// 2
// type statusType = "Active" | "Inactive";
// type processInputType = string | number | boolean;
// type processOutputType = string | number | statusType;

// const processInput = (input: processInputType): processOutputType => {
//   if (typeof input === "string") {
//     return input.trim().toLocaleLowerCase();
//   } else if (typeof input === "number") {
//     return input * 10;
//   }
//   return input ? "Active" : "Inactive";
// };

// console.log(processInput("  TypeScript  ")); // Output: "hello world"
// console.log(processInput(7)); // Output: 7
// console.log(processInput(true)); // Output: "Active"
// console.log(processInput(false)); // Output: "Inactive"

// 3
// type Coordinate = readonly [
//   latitude: number,
//   longitude: number,
//   locationName: string,
// ];
// const formatCoordinate = (coordinate: Coordinate): string => {
//   return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
// };

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]), "\n");
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]), "\n");

// 4
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const output = courses.filter(
    (course) => course.students >= minStudents && course.isPublished,
  );

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