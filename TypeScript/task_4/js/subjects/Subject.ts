// Subject.ts
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export class Subject {
    teacher: Teacher;

    // Setter method to assign a teacher
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
