import React, { Component } from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import './CSS/SignUp.css';
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';
import './CSS/Home.css';
import { Redirect } from 'react-router-dom';

class SignUp extends Component{


	constructor(props){
		super(props);

		this.state = {
				username : "",
				email : "",
				mobile :"",
				password  : "",
				confirmPass : "",
				signlg : false,
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.setSignUpSate = this.setSignUpSate.bind(this);
	}

	
	

	// One Function for all input fileds

	handleChnageALl = (event) =>{

		this.setState( {  [event.target.name] : event.target.value } )

	}

	setSignUpSate=()=>
	{
		this.setState({signlg:true});
	}
	// Submit function start here 

	 handleSubmit = (event) =>{
		event.preventDefault();

		if(this.state.password === this.state.confirmPass)
		{

			let formData = new FormData();
			formData.append('username',this.state.username);
			formData.append('email',this.state.email);
			
			formData.append('password',this.state.password);
			
			
			axios.post('http://localhost/login_signup/FormFill.php',formData).then((response)=>{
				if(response.data === "Data Inserted")
				{
					console.log(response.data);
					this.setState({signlg : true});
				}
				else
				{
					this.setState({signlg:false});
				}
			}).catch(function(error){
				alert(error)
			})
		}
		else
		{
			alert("Password Must be same...");
		}
		
		

	}
	//

    render(){

		if(this.state.signlg === true )
        {
			console.log("True Call here ",this.state.signlg);
            return <Redirect to="/" />
        }

        return(

            <div>
            <div>
             <HeadBarPage/>
             </div>

              <div className="container-fluid">
              <div className="row">
              <div className="col-xl-2 sideBarClass">
              <SideBarPage/>

              </div>

              <div className="col-xl-10">

                
          
    
    <div className="signup-form">
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-6 offset-3">
                    <h2>Sign Up</h2>
                </div>	
              </div>			
            <div className="form-group row">
            <label className="col-form-label col-1"></label>
                <label className="col-form-label col-2">Username</label>
                
                <div className="col-8">
                    <input type="text" className="form-control" id="username" name="username" required="required" value={this.state.username} onChange={this.handleChnageALl} />
                </div>        	
            </div>
    
    
            <div className="form-group row">
            <label className="col-form-label col-1"></label>
                <label className="col-form-label col-2">Email Id</label>
                <div className="col-8">
                    <input type="email" className="form-control " id="email" name="email" required="required" value={this.state.email} onChange={this.handleChnageALl} />
                </div>        	
            </div>
            {/* <div className="form-group row">
                <label className="col-form-label col-4">Mobile</label>
                <div className="col-8">
                    <input type="number" className="form-control" id="mobile" name="mobile" required="required" value={this.state.mobile} onChange={this.handleChnageALl}/>
                </div>        	
            </div> */}
            <div className="form-group row">
            <label className="col-form-label col-1"></label>
                <label className="col-form-label col-2">Password</label>
                <div className="col-8">
                    <input type="password" className="form-control" id="password" name="password" required="required" value={this.state.password} onChange={this.handleChnageALl}/>
                </div>        	
            </div>
    
            <div className="form-group row">
            <label className="col-form-label col-1"></label>
                <label className="col-form-label col-2">Confirm Password</label>
                <div className="col-8">
                    <input type="password" className="form-control" id="confpassword" name="confirmPass" required="required" value={this.state.confirmPass} onChange={this.handleChnageALl}/>
                </div>        	
            </div>
    
            <div className="form-group row">
                <div className="col-6 offset-4">
                
                    <input   type="submit" className="btn btn-primary btn-lg"  value="Sign Up" />
                </div>  
            </div>	
            {/* <div className="text-center">
            Already have an account? 
            <Link to="/" >Login here</Link>
            </div>    */}
        </form>
        
        <p></p>
        
        
     </div>




                   
              </div>
              </div>
              </div>



        </div>

        )
    }
}


export default SignUp;