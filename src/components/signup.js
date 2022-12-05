import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default function Signup(){

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers:{"enctype":"multipart/form-data"}

        
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var email = document.getElementById("email").value;
        var phonenumber = document.getElementById("phonenumber").value;
        var password = document.getElementById("password").value;
        var teststring = /^[A-Za-z]{8,15}$/;

        if(firstname === '' || firstname === null){
            alert('enter firstname');
        }
        else if(!teststring.test(firstname)){
            alert('enter firstname as pattern within 10 digit');
            document.getElementById('first_name').value = '';
        }
        else if(lastname === '' || lastname === null){
            alert('enter lastname');
        }
        else{

            await axios.post('http://localhost:3002/signup',datastring,config)
                  .then(function(res){
                    if(res.data.status === 'error'){
                        alert('error');
                        window.location.reload();
                    }
                    else if(res.data.status === 'Success'){
                        alert('Inserted');
                        window.location.reload();
                    }
                  })
                  .catch(function(err){
                    alert(err);
                    window.location.reload();
                  })

        }
        
    }
    return(
        <>
        <div className="container">
            <div className="row mt-2">
                <div className="col-lg-12">
                    <h1 className="text-center">REGISTRATION FORM</h1>
                </div>
            </div>
            <form onSubmit={handlesubmit}>
            <div className="row mt-3 col-lg-12">
            <div className="col-lg-4">&nbsp;</div>
            <div className="col-lg-4">
                    <label>FIRST NAME</label>
                    <input type="text" name="firstname" id="firstname" className="form-control"/>
            </div>
            <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className=" row mt-3 col-lg-12">
            <div className="col-lg-4">&nbsp;</div>
            <div className="col-lg-4">
                    <label>LAST NAME</label>
                    <input type="text" name="lastname" id="lastname" className="form-control"/>
            </div>
           <div className="col-lg-4 ">&nbsp;</div>
            </div>
            <div className="row mt-3 col-lg-12">
            <div className="col-lg-4">&nbsp;</div>
            <div className="col-lg-4">
                    <label>E MAIL</label>
                    <input type="email" name="email" id="email" className="form-control"/>
            </div>
            <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className=" row mt-3 col-lg-12">
            <div className="col-lg-4">&nbsp;</div>
            <div className="col-lg-4">
                    <label>PHONE NUMBER</label>
                    <input type="text" name="phonenumber" id="phonenumber" className="form-control"/>
                    
            </div>
           <div className="row col-lg-4 ">&nbsp;</div>
            </div>
            
            <div className=" row mt-3 col-lg-12">
            <div className="col-lg-4">&nbsp;</div>
            
            <div className="col-lg-4 ">
                    <label>PASSWORD</label>
                    <input type="text" name="password" id="password" className="form-control"/>
            </div>
            
           <div className="col-lg-4 ">&nbsp;</div>
           </div>
        
           <div className="row mt-3">
            <div className="col-lg-6">&nbsp;</div>
            
            <div className="col-lg-3 pr-5">
            <Link to="/">
         
    
            <button type="submit" name="data_submit" id="data_submit" value="submit" className="btn btn-primary">
                    Add
                </button>
            </Link>
         </div> 
         
         <div className="col-lg-3 ">&nbsp;</div>
         
         
         </div>
         </form>
         </div>
         
        
        

        </>
    )
}
