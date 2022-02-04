import React, { Component } from 'react';

import { Link,Redirect  } from 'react-router-dom';
import './CSS/login.css';
import axios from 'axios';
class Registration extends Component {
  constructor(props){
		super(props);

		this.state = {
				name : "",
				email : "",
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
			formData.append('name',this.state.name);
			formData.append('email',this.state.email);			
			formData.append('password',this.state.password);
			
			
			axios.post('http://assignment0.atspace.cc/student/SignUp.php',formData).then((response)=>{
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

  
  return (

    <div>
       <div className="container-fluid">

<div className="row wrapperLogin">
  <div id="formContent" style={{marginTop: 60}}>



    <div className="fadeIn first" >
     
      <p><h1 >Registration Form</h1></p> <br></br>
    </div>
    <form className="col-md-12 col-sm-12"  onSubmit={this.handleSubmit}>

      <div className="form-group">

        <div className="form-row wrapperLogin">

        <div className="form-group col-md-12">
                <input type="text" className="form-control" id="name" name="name" required="required" placeholder="Name" value={this.state.name} onChange={this.handleChnageALl} />
            </div>

          <div className="form-group col-md-12">
                <input type="email" className="form-control  " id="email" name="email" required="required" placeholder="Email" value={this.state.email} onChange={this.handleChnageALl} />
            </div>           

          <div className="form-group col-md-12">
           <input type="password" className="form-control " id="password" name="password" required="required" placeholder="Password" value={this.state.password} onChange={this.handleChnageALl} />
                
          </div>

          
			
			<div className="form-group col-md-12">
                <input type="password" className="form-control" id="confpassword" name="confirmPass" placeholder="Conform Password" required="required" value={this.state.confirmPass} onChange={this.handleChnageALl}/>
            </div>        	
        

        </div>

        <div className="form-group row">
                <div className="col-6 offset-4">                  
                    <input   type="submit" className="btn btn-primary btn-lg"  value="Sign Up" />
                </div>  
            </div>

      


      </div>
    </form>
    <div >
      <Link to="/">Log In</Link><br/><br/>
      
    </div>

  </div>



</div>
</div>

     
    </div>



  );
}
}




export default Registration;