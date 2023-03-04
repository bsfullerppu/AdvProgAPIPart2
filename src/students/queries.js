const getStudents = "SELECT * FROM students1";
const getStudentById = "SELECT * FROM students1 WHERE id = $1";
const checkEmailExists = "SELECT s FROM students1 s WHERE s.email = $1";
const addStudent = "INSERT INTO students1 (name,email,age) VALUES($1,$2,$3)"
const updateStudent = "UPDATE users SET name = $1, email = $2, age = $3 WHERE id = $4"
const deleteStudent = "DELETE FROM users WHERE id = $1"
module.exports = {
    getStudents,
    getStudentById,
    checkEmailExists,
    addStudent,
    updateStudent,
    deleteStudent
}