// main.ts

// 1. Definir la interfaz
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. crear a los estudiantes
const student1: Student = {
  firstName: "Guillaume",
  lastName: "Smith",
  age: 23,
  location: "San Francisco",
};

const student2: Student = {
  firstName: "Serena",
  lastName: "Williams",
  age: 25,
  location: "Columbia",
};

const studentsList: Student[] = [student1, student2];

// 3. Renderizar una tabla en el DOM con Vanilla JS
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
