import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';
import './CSS/AddUser.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",           
            dob: "",
            school: "",
            class: "",                      
            status: "",
            divison: "",               
            loggedIn : true,
            data : [],
            signlg: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAddUserSate = this.setAddUserSate.bind(this);
        const token = window.sessionStorage.getItem("userID");
        console.log("Token:",token);
        
        if(token === null || token === undefined)
        {
            this.state.loggedIn = false;
        }

    }

    handleChnageALl = (event) => {
        
        this.setState({ [event.target.name]: event.target.value})
        

    }

    setAddUserSate = () => {
        this.setState({ signlg: true });
    }
    // Submit function start here

    handleSubmit = (event) => {
        event.preventDefault();
        
 

        let formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('dob', this.state.dob);
        formData.append('school', this.state.school);
        formData.append('class', this.state.class);
        formData.append('divison', this.state.divison);
        formData.append('status', this.state.status); 
        console.log(this.state.status);

        axios.post('http://localhost/student/AddDataUser.php',formData).then((response) => {
            console.log(response.data);
            
            if (response.data === "Data Inserted") {
                console.log(response.data);
                this.setState({ signlg: true });
                
                
            }
            else {
                this.setState({ signlg: false });
            }
        }).catch(function (error) {
            alert(error)
        })



    }
    //




    render() {
        if (this.state.signlg === true) {
            console.log("True Call here ", this.state.signlg);
            return <Redirect to="/AddUder" />
        }
        
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/"/>
        }


        return (

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
  
                                                      <form className="form-vertical" >
                                                          <div className="col-md-12">
                                                              <div className="row">
                                                                  <div className="col-md-3">
                                                                      <div className="form-group">
                                                                          <label htmlFor="ifsc">Full Name</label>
                                                                         
                                                                      </div>
                                                                  </div>
                                                                  <div className="col-md-9">
                                                                      <div className="form-group">
                                                                          
                                                                          <input maxLength="100"
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
                                                                      <label htmlFor="email">DOB</label>
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
                                                                          <label htmlFor="gender">School</label>
                                                                          
                                                                      </div>
                                                                  </div>
                                                                  
                                                                  <div className="col-md-9">
                                                                      <div className="form-group">
                                                                      <input maxLength="100" type="text" id="school" name="school" className="form-control" placeholder="School" value={this.state.school} onChange={this.handleChnageALl} />
                                                                      </div>
                                                                  </div>
                                                                  {/* <div className="col-md-3">
                                                                      
                                                                          <input maxLength="4" type="text" id="pass_year" name="pass_year" className="form-control" placeholder="Pass Year" value={this.state.pass_year} onChange={this.handleChnageALl} />
                                                                      </div>
                                                                  </div> */}
                                                              </div>
                                                              <div className="row">
                                                                  <div className="col-md-3">
                                                                      <div className="form-group">
                                                                          <label htmlFor="gender">Class</label>
                                                                         
                                                                      </div>
                                                                  </div>
                                                                  
                                                                  <div className="col-md-9">
                                                                      <div className="form-group">
                                                                          
                                                                      <input maxLength="100" type="text" id="class" name="class" className="form-control" placeholder="Class" value={this.state.class} onChange={this.handleChnageALl} />
                                                                      </div>
                                                                  </div>
                                                                  </div>
                                                                  <div className="row">
                                                                  <div className="col-md-3">
                                                                      <div className="form-group">
                                                                          <label htmlFor="gender">Divison</label>
                                                                         
                                                                      </div>
                                                                  </div>
                                                                  
                                                                  <div className="col-md-9">
                                                                      <div className="form-group">
                                                                          
                                                                          <select id="divison" name="divison" className="form-control" required="required" value={this.state.divison} onChange={this.handleChnageALl}>
                                                                              <option value="Na" selected="">Divison</option>
                                                                              <option value="A+">S</option>
                                                                              <option value="A-">A</option>
                                                                              <option value="B+">B</option>
                                                                              <option value="B-">C</option>
                                                                              <option value="AB+">D</option>
                                                                              <option value="AB-">E</option>
                                                                              <option value="O+">N</option>
                                                                              <option value="O-">F</option>
                                                                          </select>
                                                                      </div>
                                                                  </div>
                                                                  </div>
  
                                                                  <div className="row">
                                                                  <div className="col-md-3">
                                                                      <div className="form-group">
                                                                          <label htmlFor="gender">Status</label>
                                                                         
                                                                      </div>
                                                                  </div>
                                                                  
                                                                  <div className="col-md-9">
                                                                      <div className="form-group" >                                                                          
                                                                      <div className="form-check form-check-inline" name="status" id="status"  value={this.state.active} >
                                                                        <input className="form-check-input form-check form-check-inline" name="status" id="status" type="radio" value="Active" checked={this.state.value === "Active"} onChange={this.handleChnageALl}/>
                                                                        <label className="form-check-label" htmlFor="active">Active</label>
                                                                        
                                                                        <input className="form-check-input form-check form-check-inline" type="radio" name="status" id="status" value="Inactive" checked={this.state.value === "Inactive"} onChange={this.handleChnageALl}/>
                                                                        <label className="form-check-label" htmlFor="inactive">Inactive</label>
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
                                              <input type="submit" className="btn btn-primary btn-lg" value="Add User" onClick={this.handleSubmit} />
  
                                          </div>
                                      </div>
                                  </Card.Body>
                                  <Card.Footer className="text-muted"></Card.Footer>
                              </Card>
               
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
export default AddUser;