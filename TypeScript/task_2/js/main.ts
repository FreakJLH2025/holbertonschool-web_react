// main.ts

// 1. DirectorInterface with the expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2. TeacherInterface with the expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 3. Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// 4. Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// 5. Function createEmployee
// - Accepts salary (number or string)
// - Returns Director or Teacher depending on the rules
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// 6. Example usage
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee("$500")); // Director
