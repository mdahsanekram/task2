import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';
import './CSS/Home.css';
import Card from "react-bootstrap/Card";

// import MenuItem from '@material-ui/core/MenuItem';
// import {Link} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state  = {
            loggedIn : true,
            data : []
        }
        const token = window.sessionStorage.getItem("userID");
        console.log("Token:",token);
        
        if(token === null || token === undefined)
        {
            this.state.loggedIn = false;
        }
    }

 

  render()
  {

    // if(this.state.loggedIn === false)
    //     {
    //         return <Redirect to="/"/>
    //     }
      return(
          <div >
          <div>
          <HeadBarPage/>
          </div>

              <div className="container-fluid">
              <div className="row">
              <div className="col-xl-2 sideBarClass">
              <SideBarPage/>

              </div>

              <div className="col-xl-10">
              <div className="row">
              <div className="col-md-8">
                <div className="row">
                    <div className="col-md-12">
                    <div className="row">
                    <Card   style={{width: 500}}>
                                <Card.Header>Add Student</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <div className="row">

                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane active" id="step-1">

                                                    <form className="form-vertical" onSubmit={this.handleSubmit}>
                                                        <div className="col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="ifsc">Full Name</label>
                                                                       
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-9">
                                                                    <div className="form-group">
                                                                        
                                                                        <input maxlength="100"
                                                                            type="text"
                                                                            required="required"
                                                                            id="name"
                                                                            name="name"
                                                                            className="form-control"
                                                                            placeholder="First Name"
                                                                            value={this.state.name}
                                                                            onChange={this.handleChnageALl}

                                                                        />
                                                                    </div>
                                                                </div>
                                                               

                                                               
                                                                

                                                            </div>

                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <label for="email">E Mail</label>
                                                                    <div className="form-group">

                                                                      

                                                                    </div>

                                                                </div>
                                                                <div className="col-md-9">
                                                                    <div className="form-group">
                                                                        
                                                                    <input type="date" id="dob" name="dob" required="required" className="form-control" value={this.state.dob} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                                
                                                               
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="gender">Gender</label>
                                                                        {/* <select id="gender" name="gender" className="form-control" required="required" value={this.state.gender} onChange={this.handleChnageALl}>
                                                                            <option value="Na" selected="">Select</option>
                                                                            <option value="Male">Male</option>
                                                                            <option value="Femail">Femail</option>

                                                                        </select> */}
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="col-md-9">
                                                                    <div className="form-group">
                                                                    <select id="blood_group" name="blood_group" className="form-control" required="required" value={this.state.blood_group} onChange={this.handleChnageALl}>
                                                                            <option value="Na" selected="">Select One</option>
                                                                            <option value="A+">A+</option>
                                                                            <option value="A-">A-</option>
                                                                            <option value="B+">B+</option>
                                                                            <option value="B-">B-</option>
                                                                            <option value="AB+">AB+</option>
                                                                            <option value="AB-">AB-</option>
                                                                            <option value="O+">O+</option>
                                                                            <option value="O-">O-</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                {/* <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="pass_year">Year</label>
                                                                        <input maxlength="4" type="text" id="pass_year" name="pass_year" className="form-control" placeholder="Pass Year" value={this.state.pass_year} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div> */}
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="gender">Gender</label>
                                                                       
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="col-md-9">
                                                                    <div className="form-group">
                                                                        
                                                                        <select id="blood_group" name="blood_group" className="form-control" required="required" value={this.state.blood_group} onChange={this.handleChnageALl}>
                                                                            <option value="Na" selected="">Select One</option>
                                                                            <option value="A+">A+</option>
                                                                            <option value="A-">A-</option>
                                                                            <option value="B+">B+</option>
                                                                            <option value="B-">B-</option>
                                                                            <option value="AB+">AB+</option>
                                                                            <option value="AB-">AB-</option>
                                                                            <option value="O+">O+</option>
                                                                            <option value="O-">O-</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                                <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="gender">Gender</label>
                                                                       
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="col-md-9">
                                                                    <div className="form-group">
                                                                        
                                                                        <select id="blood_group" name="blood_group" className="form-control" required="required" value={this.state.blood_group} onChange={this.handleChnageALl}>
                                                                            <option value="Na" selected="">Select One</option>
                                                                            <option value="A+">A+</option>
                                                                            <option value="A-">A-</option>
                                                                            <option value="B+">B+</option>
                                                                            <option value="B-">B-</option>
                                                                            <option value="AB+">AB+</option>
                                                                            <option value="AB-">AB-</option>
                                                                            <option value="O+">O+</option>
                                                                            <option value="O-">O-</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                </div>

                                                                <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="gender">Gender</label>
                                                                       
                                                                    </div>
                                                                </div>
                                                                
                                                                <div className="col-md-9">
                                                                    <div className="form-group">
                                                                        
                                                                    <div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
  <label class="form-check-label" for="inlineRadio1">Active</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
  <label class="form-check-label" for="inlineRadio2">Inactive</label>
</div> 
                                                                    </div>
                                                                </div>
                                                                </div>


                                                            
                                                         

                                                       

                                                        </div>
                                                    </form>
                                                </div>



                                            </div>
                                        </div>

                                    </Card.Text>
                                    <div className="form-group row">
                                        <div className="col-4 offset-4">
                                            <input type="submit" className="btn btn-primary btn-lg" value="Add User" />

                                        </div>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="text-muted"></Card.Footer>
                            </Card>
             
              </div>

              <div className="row">
            
              
              </div>

                     
              


                </div>
                </div>
              </div>


              
              </div>              
              </div>

              


              </div>
              
              </div>
              
          </div>

        )
    }
}


export default Home;