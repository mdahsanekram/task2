import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import './CSS/SignUp.css';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import startsWith from 'lodash.startswith';
    
    
const Registration =()=>{
    return(
      
        <div>

           <div className="Parent_div">

        <div  className="Child_div">
           
        <form className="col-md-12"  >
          <p><h1 >Registration Form</h1></p> <br></br>
             <div className="form-group">

             <div className="form-row">

                        <div className="form-group col-md-6">
                          
                          <input type="text" className="form-control" id="name" placeholder="Name"  name="name"  required/>
                        </div>
                        <div className="form-group col-md-6">
                          
                          <input type="text" className="form-control" id="fname" placeholder="Father Name"  name="fname"  required/>
                        </div>

                        <div className="form-group col-md-6">
                          
                          <input type="date" className="form-control" id="dob" placeholder="DOB"  name="bob"  required/>
                          
                        </div>

                        <div className="form-group col-md-6" >                      
                          <select id="inputGender" className="form-control" placeholder="Gender" name="gender" >
                            <option selected>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                        </div>

                        

                        <div className="form-group col-md-6">
                          
                          <input type="text" className="form-control" id="validationTooltip01" placeholder="Student ID"  name="username"  required/>
                        </div>

                        <div className="form-group col-md-6">
                          
                          <input type="text" className="form-control" id="validationTooltip01" placeholder="Student Name"  name="username"  required/>
                          
                        </div>

                        <div className="form-group col-md-6">
                          
                          <input type="text" className="form-control" id="validationTooltip01" placeholder="Student ID"  name="username"  required/>
                        </div>

                        <div className="form-group col-md-6">
                          
                          <input type="text" className="form-control" id="validationTooltip01" placeholder="Student Name"  name="username"  required/>
                          
                        </div>

                        <div className="form-group col-md-6">
                          
                          <input type="text" className="form-control" id="validationTooltip01" placeholder="Student ID"  name="username"  required/>
                        </div>

                        <div className="form-group col-md-6">
                          
                          <input type="text" className="form-control" id="validationTooltip01" placeholder="Student Name"  name="username"  required/>
                          
                        </div>
                                    
                  
                    
              </div>

              

             
            <button style={{width:100, backgroundColor:'#670fd0',marginTop:10, marginLeft:350}}>
                    <text style={{marginright:10}}>Registration</text>
              </button>
              

        </div>
      </form>

      </div>
      
           
    </div>
     </div>
           
           
           
        );
    }




export default Registration;