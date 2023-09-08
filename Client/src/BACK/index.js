const express = require("express");
const app = express();
const mysql2 = require("mysql2");
const cors = require("cors")

app.use(cors());
app.use(express.json());

const db = mysql2.createConnection({

    user:'root',
    host:'localhost',
    password:'pooja',
    database: 'paymentsystem',

});

app.post("/create",(req, res) =>{
    const name = req.body.name;
    const mobilenumber = req.body.mobilenumber;
    const bill = req.body.bill;
    const city = req.body.city;
    const email = req.body.email;

    db.query("INSERT INTO customer (name,mobilenumber,bill,city,email) VALUES (?,?,?,?,?)",
    [name, mobilenumber, bill, city, email],
    (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send("Values Inserted");
        }

        
    }
    
    );

});

app.get('/customer',(req,res) => {
    db.query("SELECT * FROM customer",(err,result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }

    });
});


app.put("/update",(req,res) =>{

    const Id = req.body.Id;

    const bill = req.body.bill;

    db.query(
    "UPDATE customer SET bill=? WHERE id =?", 
    [bill,Id],
    (err,result) => {
      if(err){
      console.log(err);
      }else{
        res.send(result);
      }
    }

    );

});

app.delete("/delete/:Id", (req, res) => {
    const Id = req.params.Id;
    db.query("DELETE FROM customer WHERE Id = ?", Id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });




app.listen(9999,() =>{
    console.log("Server is running on port 9999");
});