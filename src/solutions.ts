const multiplyValue = (value: number, multiplier: number = 2): number => {
  return value * multiplier;
};

type statusType = "Active" | "Inactive";
type processInputType = string | number | boolean;
type processOutputType = string | number | statusType;

const processInput = (input: processInputType): processOutputType => {
  if (typeof input === "string") {
    return input.trim().toLowerCase();
  } else if (typeof input === "number") {
    return input * 10;
  }
  return input ? "Active" : "Inactive";
};

type CoordinateType = readonly [
  latitude: number,
  longitude: number,
  locationName: string,
];
const formatCoordinate = (coordinate: CoordinateType): string => {
  return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
};

const concatenateArrays = <T>(...array: T[][]): T[] => {
  return array.flat();
};

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

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const returnArray = items.map((obj) => obj[key]);
  return returnArray;
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
