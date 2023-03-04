const { parse } = require('pg-protocol');
const pool = require('../../db');
const queries = require('./queries')

const getStudents = (req, res) => {
    //pool.query("SELECT * FROM students1",(error, results) => {
       pool.query(queries.getStudents,(error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
       }
   
const getStudentById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getStudentById,[id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}
const addStudent = (req, res) => {
    const { name, email, age } = req.body
    pool.query(queries.checkEmailExists,[email], (error, results) => {
        if(results.rows.length){
            res.send("Email already exists in the system")
       
       }
       pool.query(queries.addStudent,[name, email, age], (error, results) => {
        if(error) throw error;
        res.status(201).send("Student Created Successfully")
        
       }
       );
});
}
const updateStudent = (req, res) => {
    const id = parseInt(request.params.id)
    const { name, email, age } = req.body
  
    pool.query(queries.updateStudent,[name, email, age, id], 
     
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Successfully updated user with ID: ${id}`)
      }
    )
  }
  const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id)
  
    pool.query( [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Deleted student with ID: ${id}`)
    })
  }
  





module.exports = {
    getStudents,
    getStudentById,
    addStudent,
    updateStudent,
    deleteStudent
};