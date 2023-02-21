//Libraries
const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const { body, validationResult } = require('express-validator');

//Setup defaults for script
const app = express();
const upload = multer()
const port = 80 //Default port to http server
const connection = mysql.createConnection({
    host: "student-databases.cvode4s4cwrc.us-west-2.rds.amazonaws.com",
    user: "HEATHMAY",
    password: "DP2yLhk9InpulXr2eaRWLJTBkFvfauhHr1c",
    database: 'HEATHMAY'
});

app.get('/', upload.none(), (request, response) => {
    connection.query('SELECT * FROM ProgrammingPolyglot', (error, result) => {
        if (error) {
            console.log(error);
            return response
                .status(500) //Error code when something goes wrong with the server
                .setHeader('Access-Control-Allow-Origin', '*') //Prevent CORS error
                .json({ message: 'Something went wrong with the server.' });
        } else {
            //Default response object
            response
                .setHeader('Access-Control-Allow-Origin', '*') //Prevent CORS error
                .json({ data: result });
        }
    });
});

app.post('/',
    body('level').isLength({ min: 2 }),
    body('type').isLength({ min: 2 }),
    body('intcom').isLength({ min: 2 }),
    body('paradigms').isLength({ min: 2 }),
    body('year').isInt(),
    body('year').isLength({ min: 4 }),
    (request, response) => {
        const insertSql = `INSERT INTO ProgrammingPolyglot (name, abstraction_level, type_id, interpreted_compiled, paradigms, year) VALUES (?, ?, ?, ?, ?, ?)`
        let queryParameters = [
            request.body.name,
            request.body.level,
            request.body.type,
            request.body.intcom,
            request.body.paradigms,
            request.body.year
        ];
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(400).json({ errors: errors.array() });
        }




        connection.query(insertSql, queryParameters, (error, result) => {
            if (error) {
                console.log(error);
                return response
                    .status(500) //Error code when something goes wrong with the server
                    .setHeader('Access-Control-Allow-Origin', '*') //Prevent CORS error
                    .json({ message: 'Something went wrong with the server.' });
            } else {
                //Default response object
                response
                    .setHeader('Access-Control-Allow-Origin', '*') //Prevent CORS error
                    .json({ message: 'Form submission was succesful!' });
            }
        });
    });


app.listen(port);