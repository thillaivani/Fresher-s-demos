

export const getListOfStudents = () => {
    if (!localStorage["students"]) {
      localStorage["students"] = "[]";
    }
  
    let students = localStorage["students"];
    students = JSON.parse(students);
    return students;
  };

  export const addStudent = (student) => {
    const students = getListOfStudents();
    students.push(student);
    localStorage["students"] = JSON.stringify(students);
  };

  export const removeStudent = (id) => {
    let students = getListOfStudents();
    students = students.filter((student) => student.id !== id);
    localStorage["students"] = JSON.stringify(students);
  };

  export const getStudentById = (id) => {
    const students = getListOfStudents();
    const student = students.find((student) => student.id === id);
    return student;
  };
  
  export const editStudent = (id, newStudent) => {
    let students = getListOfStudents();
    students = students.filter((student) => student.id !== id);
    students.push(newStudent);
    localStorage["students"] = JSON.stringify(students);
  };