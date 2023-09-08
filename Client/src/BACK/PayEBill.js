import React from 'react';
import {useState} from "react"; 
import Axios from 'axios';

function PayEBill(){

    const[name, setName] = useState("");
    const[mobilenumber, setMobilenumber] = useState("0");
    const[bill, setBill] = useState("0");
    const[city, setCity] = useState("");
    const[email, setEmail] = useState("");

    const [newBill, setNewBill] = useState(0);

    const [customerList, setCustomerList] = useState([]);
    
    const addPayment = () =>
    {
        Axios.post('http://localhost:9999/create',{
            name: name,
            mobilenumber: mobilenumber,
            bill: bill,
            city: city,
            email: email,




        }).then(() =>{setCustomerList([
            ...customerList,
            {
                name: name,
                mobilenumber: mobilenumber,
                bill: bill,
                city: city,
                email: email,
            },
          ]);
        });
      };

    const getCustomer = () => {
        Axios.get("http://localhost:9999/customer").then((response) => {
            setCustomerList(response.data);
        });
      };

    const updateCustomerBill = (Id) =>{
        Axios.put("http://localhost:9999/update",{bill: newBill,Id: Id}).then(
            (response) => {
                setCustomerList(customerList.map((val) => {
                    return val.Id === Id
                      ? {
                          Id: val.Id,
                          name: val.name,
                          mobilenumber: val.mobilenumber,
                          bill: newBill,
                          city: val.city,
                          email: val.email,
                        }
                      : val;
                  })
                );
              }
            );
          };

    // const displayInfo = () => {
    //     console.log(name + mobilenumber + bill + city + email);
    // };


    const deleteCustomer = (Id) => {
        Axios.delete(`http://localhost:9999/delete/${Id}`).then((response) => {
          setCustomerList(
            customerList.filter((val) => {
              return val.Id !== Id;
            })
          );
        });
      };



    return (

        <div className="PayEBill">
            <div className="information">
            <label>Name:</label>
            <input 
            type="text" 
            onChange={(event)=>{
                setName(event.target.value);
            }}
            />
            <label>Mobile Number:</label>
            <input type="number"
            onChange={(event)=>{
                setMobilenumber(event.target.value);
            }}
            />
            <label>Enter the bill amount:</label>
            <input type="number"
            onChange={(event)=>{
                setBill(event.target.value);
            }}
            />
            <label>City</label>
            <input type="text"
            onChange={(event)=>{
                setCity(event.target.value);
            }}
            />
            <label>Email Id</label>
            <input type="text"
            onChange={(event)=>{
                setEmail(event.target.value);
            }}
            />
            <br/>
            <button onClick={addPayment}>Add Bill</button>
            </div>
            
            <br/>


            <div className="customer">
            <button onClick={getCustomer}>Show Customer list</button>

            {customerList.map((val,key) => {
                return (
                
                <div className="customers">

                    <div>
                    <h3>Name: {val.name}</h3>
                    <h3>Mobile Number: {val.mobilenumber}</h3>
                    <h3>Total Bill: {val.bill}</h3>
                    <h3>City: {val.city}</h3>
                    <h3>Email Id: {val.email}</h3>
                    </div>

                    <div>
                        {" "}
                        <input type="text" 
                        placeholder="....."
                        onChange={(event) =>{
                            setNewBill(event.target.value);
                        }}
                        
                        />
                        <button onClick={()=>{updateCustomerBill(val.Id);
                        }}
                        >
                            {" "}
                            Update
                            </button>

                            <button onClick={() => {
                    deleteCustomer(val.Id);
                  }}>Delete</button>
                    
                    </div>
                    
                    </div>
                );
            })}




        </div>
        </div>

     
        
    );
}

export default PayEBill;