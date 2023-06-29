const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
app.use(cors());

app.use(express.json());

const db= mysql.createConnection({
    host: "localhost",
    user: "chakri",
    password: "Chakri@1905",
    database: "ffcsdb",
});
// Secret key for JWT
const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString('hex');

// const secretKey = 'your_secret_key';

// Sign-up endpoint
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ error: 'Error hashing password' });
    } else {
      // Save the user to the database
      const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
      connection.query(sql, [username, hash], (error) => {
        if (error) {
          res.status(500).json({ error: 'Error creating user' });
        } else {
          res.status(201).json({ message: 'User created successfully' });
        }
      });
    }
  });
});

// Sign-in endpoint
app.post('/signin', (req, res) => {
  const { username, password } = req.body;

  // Retrieve the user from the database
  const sql = 'SELECT * FROM users WHERE username = ?';
  connection.query(sql, [username], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error retrieving user' });
    } else if (results.length === 0) {
      res.status(401).json({ error: 'Authentication failed' });
    } else {
      const user = results[0];

      // Compare the password
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ error: 'Error comparing passwords' });
        } else if (!result) {
          res.status(401).json({ error: 'Authentication failed' });
        } else {
          // Generate a JWT token
          const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
          res.status(200).json({ token });
        }
      });
    }
  });
});

// Protected route
app.get('/protected', verifyToken, (req, res) => {
  res.status(200).json({ message: 'Protected route accessed successfully' });
});

// Middleware to verify the JWT token
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    res.status(401).json({ error: 'No token provided' });
  } else {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(401).json({ error: 'Invalid token' });
      } else {
        req.userId = decoded.userId;
        next();
      }
    });
  }
}
app.post("/create", (req,res) => {
const name=req.body.name;
const reg=req.body.reg;
const branch=req.body.branch;
const school=req.body.school;
const credits=req.body.credits;
db.query(
    "INSERT INTO students (name, reg, branch, school, credits) VALUES (?,?,?,?,?)",
    [name, reg, branch, school, credits],
    (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send("values Inserted");
        }
    }
);
    }
);
app.get('/registercourses/:code', (req, res) => {
  const code = req.params.code;
  db.query('SELECT * FROM courses WHERE code = ?',[code], (err, result) =>{
    if(err){
        console.log(err);
    }else{
        res.send(result);
    }
});
  
});
app.post('/createCourse', (req, res) => {
  const { course_name, course_code, faculty_name, slot, code } = req.body;
  const sql = 'INSERT INTO courses (course_name, course_code, faculty_name, slot, code) VALUES (?, ?, ?, ?, ?)';
  const values = [course_name, course_code, faculty_name, slot, code];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send('Error creating a new course.');
    } else {
      res.status(200).send('New course created successfully.');
    }
  });
});
app.post('/createrating', (req, res) => {
  const { faculty_name, facultyid, rating } = req.body;
  const sql = 'INSERT INTO facultyrating (faculty_name, facultyid, rating) VALUES (?, ?, ?)';
  const values = [faculty_name, facultyid, rating];

  db.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send('Error creating a new faculty rating.');
    } else {
      res.status(200).send('New faculty rating created successfully.');
    }
  });
});
app.get('/ratings', (req, res) => {
  const sql = 'SELECT * FROM faculty_ratings';

  db.query(sql, (err, results) => {
    if (err) {
      res.status(500).send('Error fetching faculty ratings.');
    } else {
      res.status(200).json(results);
    }
  });
});
app.post("/createFaculty",(req,res)=>{
  const facultyname=req.body.facultyname;
  const facultuid=req.body.facultuid;
  const facultyschool=req.body.facultyschool;
  const designation=req.body.designation;
  const email=req.body.email;
  const credits=req.body.credits
  db.query(
    "INSERT INTO Faculty (facultyname, facultyid, facultyschool, designation, email, credits) VALUES (?,?,?,?,?,?)",
    [facultyname, facultuid, facultyschool, designation, email, credits],
    (err, result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send("Values INSERTED")
      }
      }
    
  );
});
app.get("/Faculty", (req, res) =>{
  db.query("SELECT * FROM faculty", (err, result) =>{
      if(err){
          console.log(err);
      }else{
          res.send(result);
      }
  });
}
);
app.get("/students", (req, res) =>{
    db.query("SELECT * FROM students", (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
}
);
app.get("/courses", (req, res) =>{
    db.query("SELECT * FROM courses", (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
}
);

app.put("/update", (req, res)=>{
    const id=req.body.id;
    const credits=re.body.credits;
    db.query(
        "UPDATE students SET credits=? WHERE id = ?",
        [credits, id],
        (err, result)=>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
    )
});
app.delete("/delete/:id", (req, res) =>{
    const id= req.params.id;
    db.query("DELETE FROM students WHERE id=?", id, (err, result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.listen(3001,()=>{
    console.log("Server running on the port 3001");
})