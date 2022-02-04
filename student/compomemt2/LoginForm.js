import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Redirect , Link} from 'react-router-dom';
import axios from 'axios';
import './CSS/login.css';
import Registration from './Registration';





class LoginForm extends Component{

    constructor(props){
        super(props);
       
        this.state = {
            email : "",
            password : "",
            logged : false,
           
        }
    }


    handleChangeAll = (event) =>{

        this.setState({[event.target.name ] : event.target.value});

    }



    // Submit function start here 

    handleSubmit = (event) =>{
            event.preventDefault();
            
            if(this.state.email.length !=0 && this.state.password.length !=0)
            {

                let formData = new FormData();
                formData.append("email",this.state.email);
                formData.append("password",this.state.password);
               
                
                
                axios.post('http://localhost/student/Login.php',formData)
                .then((response)=>{

                   console.log(response);
                  if(response.data[0] === "success")
                  {
                      //this.setState({logged:true});
    
                      window.sessionStorage.setItem("userID",response.data[1]);
                     
                      this.setState({logged:true});
                     
                  }
                  else
                   { 
                       console.log("Else data ",response.data);
                       this.setState({logged : false});
                       document.getElementById('para').innerHTML="Invalid Email or Password";
                   }


                }).catch(function (error){

                    alert(error);
                })

               
            }
            else
            {
                alert("Password Must be more the 1 digit ");
            }


    }

    render(){

        if(this.state.logged === true)
        {
            return <Redirect to="/ShowData" />
        }


            return(
                <div>

            <div className="header">
                
                <div style={{
                    color: "#fff"
                 }}>
                <p>Email:- ahsan@gmail.com</p>
                <p>Password:- 12345</p>

                </div>
                


            </div>

    <div className="container-fluid">
        <div className="row">
            <div className="col-md-12 col-sm-12">
                
               
                
                <div className="wrapperLogin fadeInDown">
                  <div id="formContent">
                  
                    <div className="fadeIn first">
                      {/* <img src={image1} id="icon" alt="User Icon" height="200px"  /> */}
                      <h3>Admin Login</h3>    
                    </div>

                  
                    <form   onSubmit={this.handleSubmit}>
                      <input class="mail" type="email" id="login"  name="email" placeholder="email" 
                       value={this.state.email} onChange={this.handleChangeAll}  required/>

                      <input className="password"  type="password" id="password" name="password" placeholder="password" 
                       value={this.state.password} onChange={this.handleChangeAll} required />
                       
                      <input type="submit" className="fadeIn fourth" value="Log In" />
                    </form>

                   
                    <div id="formFooter">
                      <Link to="/Registration">Sign UP</Link>
                        <p id="para" style={{color :"red"}}></p>
                    </div>

                  </div>
                </div>

            
            
            </div>
         </div>
        </div> 

 </div>

        );

    }
}


export default LoginForm;