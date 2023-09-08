import express from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());

const conn = createConnection({
    host: "localhost",
    user: "root",
    password: "sept22",
    database: "castvote"
});

conn.connect((error) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Database connected");
    }
})

app.post('/sample', (request, response) => {
    var insertQry = `INSERT INTO sample VALUES('${request.body.name}',
                                        ${request.body.vid},
                                        '${request.body.vc}',
                                        '${request.body.email}',
                                        '${request.body.pass}')`
    conn.query(insertQry, (error, result) => {
        if (error) {
            response.status(500).send({ message: 'Error in Insert' });
        }
        else {
            response.status(200).send({ message: 'Registerd Sucefully' });
        }
    });

});

app.post('/vote', (request, response) => {
    var insertQry2 = `INSERT INTO parties VALUES(
        '${request.body.Parties_Name}',
         ${request.body.VoterID})`
    conn.query(insertQry2, (error, result) => {
        if (error) {
            response.status(500).send({ message: 'Error in inserting vote' });
        }
        else {
            response.status(200).send({ message: 'Vote registered successfully' });
        }
    });
});




// Feedback 
app.post('/feedback', (request, response) => {
    var insertQry1 = `INSERT INTO feedback VALUES(
        '${request.body.name}','${request.body.email}',
        '${request.body.Voter_Id}','${request.body.phone}','${request.body.comments}')`
    conn.query(insertQry1, (error, result) => {
        if (error) {
            response.status(500).send({ message: 'Error in inserting feedback' });
        }
        else {
            response.status(200).send({ message: 'Feedback registered successfully' });
        }
    });
});




app.get('/sample', (req, res) => {

    conn.query("SELECT * FROM sample ",

        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});

app.get('/count', (req, res) => {

    conn.query("select Parties_Name, count(Parties_Name) AS 'count' from parties group by Parties_Name",


        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
});


app.delete('/sample/:VoterID', (request, response) => {

    var deleteQry = "delete from sample where VoterID=" + request.params.VoterID;

    conn.query(deleteQry, (error, result) => {

        if (error) {

            response.status(500).send(error);
        }
        else {

            response.status(200).send({ message: 'Successfully Completed book' });
        }
    });
});


// app.get('/sample', (req, res) => {

//     var selectQry1 = "SELECT * FROM sample ";

//     conn.query(selectQry1,(error,result)=>{
//         if (error) {
//             response.status(500).send(error);
//         }
//         else{
//             response.status(200).send(result);
//         }
//     });
// });

// app.post('/sample', (request, response) => {
//     const email = request.body.email;
//     const password = request.body.pass;

//     var selectQry = `SELECT * FROM sample WHERE email= ? AND password = ?(
//                                         '${request.body.email}',
//                                         '${request.body.pass}')`
//     conn.query(selectQry, (error, result) => {
//         if (error) {
//             response.status(500).send({ message: 'Error in Fetching' });
//         }

//         if (result.length>0) {
//             response.status(200).send(result);
//         }
//         else {
//               response.send({ message: 'User Not Found' });
//             }
//     });

// });




// app.post('/sample', (req, res) => {
//     const email = req.body.email;
//     const password = req.body.pass;

//     conn.query(()=>{
//         "SELECT * FROM sample WHERE email=? AND password= ?",
//             [email, password],
//             (err, result) => {
//                 if (err) {
//                     console.log(err);
//                 }

//                 if (result.length > 0) {
//                     res.send(result);
//                 } else {
//                     res.send({ message: "No User Found " });
//                 }
//             }
//     });

// });



// app.get('/sample', (request, response) => {
//     var selectQry = "SELECT Email,Password FROM sample";
//     conn.query(selectQry, (error, result) => {
//         if (error) {
//             response.status(500).send({ message: 'Error in Fetching' });
//         }
//         else {
//             response.status(200).send(result)
//         }
//     });
// });





app.listen(5500, () => {
    console.log('Listing on Port 5500');
});