import React from "react";
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


export default function Signin(){
    return(
        <>
        <div className="container">
            <div className="row mt-2">
                <div className="col-lg-12">
                    <h1 className="text-center">LOGIN FORM</h1>
                </div>
            </div>
            <div className="row mt-3 col-lg-12">
            <div className="col-lg-4">&nbsp;</div>
            <div className="col-lg-4">
                    <label>USER NAME</label>
                    <input type="text" name="user_name" id="user_name" className="form-control"/>
            </div>
            <div className="col-lg-4">&nbsp;</div>
            </div>
            <div className=" row mt-3 col-lg-12">
            <div className="col-lg-4">&nbsp;</div>
            <div className="col-lg-4">
                    <label>PASSWORD</label>
                    <input type="text" name="password" id="password" className="form-control"/>
            </div>
           <div className="col-lg-4 ">&nbsp;</div>
            </div>
            <div className="row mt-3">
            <div className="col-lg-4">&nbsp;</div>
            <Link to="/">
            <div className="col-lg-2">
                <input type="button" name="inbutton" id="inbutton" value="sign in" className="btn btn-primary"/>
            </div>
            </Link>
            <Link to="/signup">
            <div className="col-lg-2 pr-5">
                <input type="button" name="upbutton" id="upbutton" value="sign up" className="btn btn-primary"/>
            </div>
            </Link>
            <div className="col-lg-4 ">&nbsp;</div>


            </div>
        
        </div>    
        </>
    )
}
