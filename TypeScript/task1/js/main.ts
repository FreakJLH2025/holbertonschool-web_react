// main.ts

// 1. Define la interfaz Teacher
interface Teacher {
  readonly firstName: string;   // solo se puede asignar al inicializar
  readonly lastName: string;    // solo se puede asignar al inicializar
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;   // opcional
  location: string;
  [propName: string]: any;      // permite atributos adicionales con nombre string y cualquier tipo
}

// 2. Crea un objeto Teacher de ejemplo
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "Mexico",
  contract: false, // atributo adicional permitido
};

// 3. Otro ejemplo con yearsOfExperience
const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  yearsOfExperience: 10,
  location: "USA",
  contract: true, // atributo adicional permitido
};

// 4. Mostrar en consola para verificar
console.log(teacher1);
console.log(teacher2);
