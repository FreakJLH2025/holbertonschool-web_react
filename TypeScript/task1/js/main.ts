// main.ts

interface Teacher {
  readonly firstName: string;   // Only set during initialization
  readonly lastName: string;    // Only set during initialization
  fullTimeEmployee: boolean;    // Required
  yearsOfExperience?: number;   // Optional
  location: string;             // Required
  [propName: string]: any;      // Allows additional properties
}

// Directors interface extends Teacher
// Adds a required property numberOfReports
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example usage
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
