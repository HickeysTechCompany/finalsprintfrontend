// server.js
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
 
const app = express();
const PORT = process.env.PORT || 3000;
 
// Connect to MySQL
mysql.connect('mysql://localhost/backend_finalsprint_s4', { useNewUrlParser: true, useUnifiedTopology: true });
 
app.use(bodyParser.json());
 
// Define API endpoints
app.get('/airport', (req, res) => {
  // Retrieve data from the database and send it as a response
});
 
app.post('/airport', (req, res) => {
  // Create a new record in the database based on the request data
});
 
// ... Other CRUD operations
 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// const port = 3000;

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Keyin2021',
//   database: 'backend_finalsprint_s4',
// });

// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('MySQL connected...');
// });

// app.set('view engine', 'ejs');
// app.use(express.urlencoded({ extended: true }));

// pp.get('/Main', (req, res) => {
//     const searchQuery = req.query.name;

//     const sql = `
//         SELECT 
//             airport.name AS airport_name, airline.name AS airline_name, gates.name AS gates_name
//         FROM airport
//         LEFT JOIN aircraft ON airport.id = aircraft.id
//         LEFT JOIN airline ON aircraft.id = airline.id
//         LEFT JOIN gates ON airport.id = gates.id
//         WHERE airport.name LIKE '%${searchQuery}%'
//     `;

//     db.query(sql, (err, results) => {
//         if (err) {
//             throw err;
//         }
//         res.render('Main', { airports: results });
//     });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server started on port ${PORT}`);
// });
