// main.ts

// 1. Define the interfaces
interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // unique brand property
}

interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // unique brand property
}

// 2. Functions to sum credits

// Sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits",
  };
}

// Sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits",
  };
}

// 3. Example usage
const major1: MajorCredits = { credits: 3, brand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, brand: "MajorCredits" };
const minor1: MinorCredits = { credits: 2, brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 1, brand: "MinorCredits" };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log(totalMajor); // { credits: 7, brand: "MajorCredits" }
console.log(totalMinor); // { credits: 3, brand: "MinorCredits" }
