// const name = req.body.name;
// const location = req.body.location;
// const imagePath = req.file.path;

// // Save the data to the database
// const insertQuery = `INSERT INTO majamaa (name, location, imagePath) VALUES (?, ?, ?)`;
// pool.query(insertQuery, [name, location, imagePath], (error, results) => {
//   if (error) {
//     console.error('Error saving data to the database:', error);
//     res.status(500).send('Error saving data to the database.');
//   } else {
//     res.send(`Image uploaded successfully! Name: ${name}, Location: ${location}`);
//   }
// });