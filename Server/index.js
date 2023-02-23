//Libraries
const express = require('express');
const multer = require('multer');
const mysql = require('mysql2');
const { check, checkSchema, body, validationResult } = require('express-validator');

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

app.get('/langs/', upload.none(), (request, response) => {
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

app.post(
    '/', upload.none(), 

    

    check('name', 'Please enter a valid name.').isLength({ min: 3 }),
    check('level', "Please enter a valid level.").isIn(['High', 'Low']),
    check('type', "Please enter a valid type system.").isIn(['Static', "Dynamic"]),
    check("intcom", "Please indicate either interpreted or compiled.").isIn(['Interpreted', 'Compiled']),
    check("paradigms", "Please enter a valid paradigm.").isIn(['Multi', "Procedural", "OOP", "Logic"]),
    check("year", "Please enter a valid year.").isLength({ min: 4 }),

    (request, response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response
                .status(400)
                .setHeader('Access-Control-Allow-Origin', "*")
                .json({
                    message: 'Request fields or files are invalid.',
                    errors: errors.array(),
                })
        }


        const insertSql = `INSERT INTO ProgrammingPolyglot (name, abstraction_level, type_id, interpreted_compiled, paradigms, year) VALUES (?, ?, ?, ?, ?, ?)`
        let queryParameters = [
            request.body.name,
            request.body.level,
            request.body.type,
            request.body.intcom,
            request.body.paradigms,
            request.body.year
        ];
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
                    .json({ message: 'Form submission was successful!' });
            }
        });
    });


app.listen(port);