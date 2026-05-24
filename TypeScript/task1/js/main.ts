// main.ts

// Interface describing the constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// - It must have workOnHomework() returning a string
// - It must have displayName() returning the firstName
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 3. Implement the class using the interfaces
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Method that returns "Currently working"
  workOnHomework(): string {
    return "Currently working";
  }

  // Method that returns the student's firstName
  displayName(): string {
    return this.firstName;
  }
}

// 4. Example usage
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName());     // Output: John
console.log(student.workOnHomework());  // Output: Currently working
