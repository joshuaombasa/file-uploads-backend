const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const path = require('path');
const cors  =require('cors')

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());

// config to access form information
app.use(express.urlencoded({ extended: false }))

// Create a MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'watu',
  connectionLimit: 10, // Set the maximum number of connections in the pool
});

// Configure multer to handle file uploads
const upload = multer({
  dest: 'public/images', // Set the directory where uploaded files will be stored
});

// Basic route to serve the HTML form for image upload
app.get('/', (req, res) => {
  res.send('Hi there');
});

// Route to handle the file upload
app.post('/upload',  (req, res) => {
  // Access the fields from the form
  console.log({"Joshua": "Request recieved"})
  console.log(req.body.name)
 
});

app.get('/staff', (req, res) => {
  const sql = `SELECT * FROM majamaa`
  pool.query(sql, (error, results) => {
    if (error) {
      console.error(error)
    } else {
      
      res.send(results);
    }
  })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
