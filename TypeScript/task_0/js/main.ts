// main.ts

// 1. Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Create two Student objects
const student1: Student = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "Serena",
  lastName: "Williams",
  age: 25,
  location: "Columbia",
};

// 3. Store them in an array
const studentsList: Student[] = [student1, student2];

// 4. Render a table with Vanilla JS
const table: HTMLTableElement = document.createElement("table");
const tbody: HTMLTableSectionElement = document.createElement("tbody");

studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
