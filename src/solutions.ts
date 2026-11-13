//*============ Problem 1 ============*//

function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

// console.log(multiplyValue(10, 5));

//*============ Problem 2 ============*//

type InputValue = string | number | boolean;

function processInput(value: InputValue): string | number {
  if (typeof value === "string") {
    return value.toLowerCase().trim();
  } else if (typeof value === "number") {
    return Number(value * 10);
  } else {
    return value ? "Active" : "Inactive";
  }
}

// console.log(processInput("  TypeScript  "));
// console.log(processInput(7));
// console.log(processInput(true));
// console.log(processInput(false));

//*============ Problem 3 ============*//

type Coordinate = readonly [number, number, string];

function formatCoordinate(value: Coordinate): string {
  const latitude = value[0];
  const longitude = value[1];
  const locationName = value[2];

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

// console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
// console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));

//*============ Problem 4 ============*//

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// console.log(concatenateArrays(["a", "b"], ["c", "d"]));
// console.log(concatenateArrays(concatenateArrays([1, 2], [3, 4], [5])));

//*============ Problem 5 ============*//

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
}

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

// console.log(getPopularCourses(courses, 80));

//*============ Problem 6 ============*//

function pluckValues<T, K extends keyof T>(users: T[], key: K): T[K][] {
  const student = [];
  for (let user of users) {
    student.push(user[key]);
  }
  return student;
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];
// console.log(pluckValues(users, "name"));
// console.log(pluckValues(users, "id"));

//*============ Problem 7 ============*//

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

// Create an Employee object
const employee = new Employee("Kamal", 30000);

// Create a Manager object
const manager = new Manager("Alice", 50000, "Engineering");


// console.log(employee.getDetails());
// console.log(manager.getDetails());
// console.log(manager.getRoleInfo());
