// main.ts

interface Teacher {
  readonly firstName: string;   // Only set during initialization
  readonly lastName: string;    // Only set during initialization
  fullTimeEmployee: boolean;    // Required
  yearsOfExperience?: number;   // Optional
  location: string;             // Required
  [propName: string]: any;      // Allows additional properties
}

// 1. Define the interface for the function
// - It accepts two string arguments: firstName and lastName
// - It returns a string
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// 2. Implement the function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// 3. Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith
