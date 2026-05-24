// main.ts

// 1. Define a string literal type Subjects
// - It only allows the values "Math" or "History"
type Subjects = "Math" | "History";

// 2. Define the function teachClass
// - It accepts todayClass of type Subjects
// - Returns the appropriate teaching string
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// 3. Example usage
console.log(teachClass("Math"));    // Output: Teaching Math
console.log(teachClass("History")); // Output: Teaching History
