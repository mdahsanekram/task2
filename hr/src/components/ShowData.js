// https://www.youtube.com/watch?v=6QvNCZQWDZk
import React, {Component, useState} from 'react';
import { Redirect } from 'react-router-dom';
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';
import {Modal,Button} from 'react-bootstrap';
import './CSS/ShowData.css';
import axios from 'axios';
import { faEdit,  faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "datatables.net-dt/js/dataTables.dataTables";

import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/css/jquery.dataTables.min.css";
import './CSS/ShowData.css';
class ShowData extends Component
{
    constructor(props)
    {
        super(props);

        this.state  = {
          show : false,
          show1:false,
          loggedIn : true,
          data : [],
          cols:[],
          offset: 0,
          tableData: [],
          orgtableData: [],
          perPage: 9,
          currentPage: 0,
          isVarified : false,
            fname   : "",
            lname   : "",
            dob     : "",
            mobile  : "",
            email   : "",
            blood_group : "",            
            father_name : "",
            father_mob_no : "",
            gender  : "",
            adhar_no : "",
            highest_qualification : "",
            pass_year : "",
            address : "",
            state : "",
            city : "",
            pin : "",
            pan_no : "",
            parmanent_address : "",
            bank_name : "",
            account_no : "",
            ifsc_code : "",
            userID : 0,
            searchUser:""
      }
        this.search = this.search.bind(this);   
       const token = window.sessionStorage.getItem("userID");

      console.log("showtoc:",token);
      }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
        currentPage: selectedPage,
        offset: offset
    }, () => {
        this.loadMoreData()
    });

};

loadMoreData() {
const data = this.state.orgtableData;

const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
this.setState({
  pageCount: Math.ceil(data.length / this.state.perPage),
  tableData:slice
})

}







// logout= ()=>{
 
//   window.sessionStorage.clear();
//   this.setState({loggedIn : false});
//   return <Redirect to="/" />

//       } 

    componentDidMount()
    {       

        // axios.post('http://dashbord.atspace.cc/login_signup/ShowUser.php')
        axios.post('http://localhost/login_signup/ShowUser.php')
        
            .then((response)=>{
               
              this.setState({data: response.data, cols:  response.data.cols});
              var tdata = response.data;
               
				        var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(tdata.length / this.state.perPage),
                    orgtableData : tdata,
                    tableData:slice
                });
                
            }).catch(function(error)
            {
                alert(error);
            })

    }
search=(e)=>{
  this.setState({searchUser:e.target.value})

}
// var a=[];
  // if(this.state.data.find(name => name.fname == e.target.value)  ){
  //   a=this.state.data.find(name => name.fname == e.target.value)
  // }else if(this.state.data.find(name => name.mobile == e.target.value)){
  //  a=this.state.data.find(name => name.mobile == e.target.value)

  // }
  // console.log(a)
   
  
  // this.setState({data: this.state.data.find(name => name.fname == e.target.value), cols:  a.cols});
  //             var tdata = a;               
	// 			        var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage);
  //               this.setState({
  //                   pageCount: Math.ceil(tdata.length / this.state.perPage),
  //                   orgtableData : tdata,
  //                   tableData:slice
  //               });
  
    
  // return this.state.data.find(name => name.fname === e.target.value)
  
  
// }


  handleModal = () =>{

      this.setState({show: !this.state.show});
  }

  handleModal2 = () =>{

    this.setState({show1: !this.state.show1});
}



  handleModalGetData = (userID) =>
  {
                let formData = new FormData();
                formData.append("userID",userID);


                formData.append('fname',this.state.fname);
			          formData.append('lname',this.state.lname);
                formData.append('dob',this.state.dob);
			          formData.append('mobile',this.state.mobile);
		            formData.append('email',this.state.email);
                formData.append('blood_group',this.state.blood_group);
                formData.append('father_name',this.state.father_name);
                formData.append('father_mob_no',this.state.father_mob_no);
            
                formData.append('gender',this.state.gender);
		      	    formData.append('adhar_no',this.state.adhar_no);
                formData.append('highest_qualification',this.state.highest_qualification);
                formData.append('pass_year',this.state.pass_year);
			          formData.append('address',this.state.address);
                formData.append('state',this.state.state);
			          formData.append('city',this.state.city);
                formData.append('pin',this.state.pin);
                formData.append('pan_no',this.state.pan_no);
                formData.append('parmanent_address',this.state.parmanent_address);
                formData.append('bank_name',this.state.bank_name);
			          formData.append('account_no',this.state.account_no);
                formData.append('ifsc_code',this.state.ifsc_code);


    axios.post('http://localhost/login_signup/EditData.php',formData)
    .then((response)=>{
              console.log(response.data[0].fname);

               this.state.userID = response.data[0].userID;               
               this.state.fname=response.data[0].fname;
               this.state.lname=response.data[0].lname;
               this.state.dob=response.data[0].dob;
               this.state.mobile=response.data[0].mobile;

               this.state.email=response.data[0].email;
               this.state.blood_group=response.data[0].blood_group;
               this.state.father_name=response.data[0].father_name;
               this.state.father_mob_no=response.data[0].father_mob_no;

               this.state.gender=response.data[0].gender;
               this.state.adhar_no=response.data[0].adhar_no;
               this.state.address=response.data[0].address;
               this.state.highest_qualification=response.data[0].highest_qualification;
               this.state.pass_year=response.data[0].pass_year;

               this.state.state=response.data[0].state;
               this.state.city=response.data[0].city;
               this.state.pin=response.data[0].pin;
               this.state.pan_no=response.data[0].pan_no;

               this.state.parmanent_address=response.data[0].parmanent_address;
               this.state.account_no=response.data[0].account_no;
               this.state.ifsc_code=response.data[0].ifsc_code;
               

              this.setState({show: !this.state.show});                
      }).catch(function(error)
      {
        alert(error);
      });
  }

  submitModal =()=>{
    let formData = new FormData();

                formData.append("userID",this.state.userID);
               

                formData.append('fname',this.state.fname);
			          formData.append('lname',this.state.lname);
                formData.append('dob',this.state.dob);
			          formData.append('mobile',this.state.mobile);
		          	formData.append('email',this.state.email);
                formData.append('blood_group',this.state.blood_group);
                formData.append('father_name',this.state.father_name);
                formData.append('father_mob_no',this.state.father_mob_no);
            
                formData.append('gender',this.state.gender);
		      	    formData.append('adhar_no',this.state.adhar_no);
                formData.append('highest_qualification',this.state.highest_qualification);
                formData.append('pass_year',this.state.pass_year);
			          formData.append('address',this.state.address);
                formData.append('state',this.state.state);
			          formData.append('city',this.state.city);
                formData.append('pin',this.state.pin);
                formData.append('pan_no',this.state.pan_no);
                formData.append('parmanent_address',this.state.parmanent_address);
                formData.append('bank_name',this.state.bank_name);
			          formData.append('account_no',this.state.account_no);
                formData.append('ifsc_code',this.state.ifsc_code);


                // http://localhost/login_signup/   
          //  axios.post('http://dashbord.atspace.cc/login_signup/updateUser.php',formData)
          axios.post('http://localhost/login_signup/updateUser.php',formData)
          .then((response)=>{
                  
                 
          if(response.data === "Data Update")
          {
           
            // this.setState({signlg : true});
            this.setState({loggedIn : true});

            this.setState({show: !this.state.show});

            this.componentDidMount();


          }
          else
          {
            this.setState({loggedIn :false});
          }
        }).catch(function(error){
          alert(error)
        })
  }

  keyPress(e){
   
          // if(e.keyCode == 13){
    
          //   this.setState({    
          //       loading: true    
          //   });
    
          //   this.setState({
          //  searchQuery:e.target.value
   
          //   });
             
    
          //   let test_type = this.state.test_type !==undefined ? this.state.test_type : '';     
          //   let url = constant.APP_URL+'api/get-student?searchColumn=name&searchQuery='+e.target.value+'&test_type='+test_type;
          //   this.getCallApi(url);   
          //   this.setState({    
          //  loading: false
    
          //   });
    
          // }
    
        }
    

  handleModalGetData2 = (userID) =>
  {
   
    
    let formData = new FormData();
                formData.append("userID",userID);
                
    axios.post('http://localhost/login_signup/EditData.php',formData)
    .then((response)=>{
              // console.log(response.data[0].fname);

               this.state.userID = response.data[0].userID;               
               this.state.fname=response.data[0].fname;
               this.state.lname=response.data[0].lname;
               this.state.dob=response.data[0].dob;
               this.state.mobile=response.data[0].mobile;

               this.state.email=response.data[0].email;
               this.state.blood_group=response.data[0].blood_group;
               this.state.father_name=response.data[0].father_name;
               this.state.father_mob_no=response.data[0].father_mob_no;

               this.state.gender=response.data[0].gender;
               this.state.adhar_no=response.data[0].adhar_no;
               this.state.address=response.data[0].address;
               this.state.highest_qualification=response.data[0].highest_qualification;
               this.state.pass_year=response.data[0].pass_year;

               this.state.state=response.data[0].state;
               this.state.city=response.data[0].city;
               this.state.pin=response.data[0].pin;
               this.state.pan_no=response.data[0].pan_no;

               this.state.parmanent_address=response.data[0].parmanent_address;
               this.state.account_no=response.data[0].account_no;
               this.state.ifsc_code=response.data[0].ifsc_code;
               

               this.setState({show1: !this.state.show1});               
      }).catch(function(error)
      {
        alert(error);
      });
  }

  handleChange(e) {
    this.emitChangeDebounced(e.target.value);
  }

  handleChnage = (event) =>{

    this.setState( {  [event.target.name] : event.target.value } )

  }

  emitChange(value) {
    this.props.onChange(value);
  }
    render()
  {
   


    if(this.state.loggedIn === false)
        {   
            return <Redirect to="/"/>
        }
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

              <div className="col-xl-10 mb-3 mt-3 tbl">
              {/* <div class="jumbotron text-center">
                   <h3>Therichpost.com</h3>
               </div> */}

              <div className="search">
                <input type="Search!" placeholder="Search.." value={this.state.searchUser}   onChange={this.search}
                
             
                />
    
              </div>


                   <table className="table table-striped table-bordered table-sm row-border hover ">  
                      <thead>  
                        <tr>
                          <th scope="col">Id </th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Mobile</th>
                          <th scope="col">Action</th> 
                        </tr>
                      </thead>
                      {/* <TableContainer>

                      </TableContainer> */}

                      <tbody>
                        {
                        
                            this.state.tableData.filter((val)=>{
                              if(this.state.searchUser == "")
                              {
                                return val
                              } else if (val.fname.toLowerCase().includes(this.state.searchUser.toLowerCase()))
                              {
                                return val
                              } else if (val.lname.toLowerCase().includes(this.state.searchUser.toLowerCase()))
                              {
                                return val
                              } else if (val.mobile.toLowerCase().includes(this.state.searchUser.toLowerCase()))
                              {
                                return val
                              }
                             
                              
                            }).map((user,index)=>(
                            
                                <tr key={user.Id}>
                                   <td>{user.Id}</td>
                                    <td>{user.fname} {user.lname}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td >
                                      {/* <Link to={{ pathname:"/EditUser", 
                                      editProps:{editData: user.Id} }} className="btn btn-primary mr-2"><FontAwesomeIcon icon={faEdit} /></Link> */}
                                       {/* {() => setModalShow(true)} */}
                                      <Button type="button" className="btn btn-outline-secondary mr-2" onClick={()=>this.handleModalGetData(user.Id)}>
                                      <FontAwesomeIcon icon={faEdit} />
                                      </Button>                                                                       
                                        
                                      <Button type="button" className="btn btn-light mr-2" onClick={()=>this.handleModalGetData2(user.Id)} >
                                      <FontAwesomeIcon icon={faEye} />
                                      </Button>

                                      {/* <Button type="button" className="btn btn-outline-dark mr-2" onClick={()=>this.handleModalGetData(user.Id)}>
                                      <FontAwesomeIcon icon={faEdit} />
                                      </Button>  */}
                                     </td>               
                            
                                </tr>
                            ))
                            
                        }
                      </tbody>
                    </table>

                    <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>



              </div>
            </div>              
          </div>
          {/*  Edit Start Model */}

          <div id="exampleModal">
          <Modal size="lg" show={this.state.show} onHide={()=>this.handleModal()}>
                <Modal.Header closeButton>
                  <Modal.Title>Edit User  </Modal.Title>
               </Modal.Header>
              <Modal.Body>
              <div className="container">
                <div className="row">
  
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter First Name"
                      name="fname"  
                      value={this.state.fname}   
                      onChange={this.handleChnage}                    
                      />
                  </div>
                </div>
  
                 <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Last Name"
                      name="lname"
                      value={this.state.lname}   
                      onChange={this.handleChnage}                     
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter DOB"
                      name="dob"
                      value={this.state.dob}   
                      onChange={this.handleChnage}              
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Mobile"
                      name="mobile"
                      value={this.state.mobile}   
                      onChange={this.handleChnage}                    
                   />
                  </div>
                </div>


                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Email"
                      name="email"
                      value={this.state.email}   
                      onChange={this.handleChnage}                     
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Glood Group"
                      name="blood_group"
                      value={this.state.blood_group}   
                      onChange={this.handleChnage}                    
                   />
                  </div>
                </div>


                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Father Name"
                      name="father_name"
                      value={this.state.father_name}   
                      onChange={this.handleChnage}                     
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Father Mobile"
                      name="father_mob_no"
                      value={this.state.father_mob_no}   
                      onChange={this.handleChnage}                      
                   />
                  </div>
                </div>


                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Gender"
                      name="gender"
                      value={this.state.gender}   
                      onChange={this.handleChnage}                     
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Adhar No"
                      name="adhar_no"
                      value={this.state.adhar_no}   
                      onChange={this.handleChnage}                      
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Qualification"
                      name="highest_qualification"
                      value={this.state.highest_qualification}   
                      onChange={this.handleChnage}                     
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Pass Year"
                      name="pass_year"
                      value={this.state.pass_year}   
                      onChange={this.handleChnage}                     
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter  Address"
                      name="address"
                      value={this.state.address}   
                      onChange={this.handleChnage}                    
                   />
                  </div>
                </div>


                <div className="col-md-3">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter  State"
                      name="state"
                      value={this.state.state}   
                      onChange={this.handleChnage}                      
                   />
                  </div>
                </div>

                <div className="col-md-3">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter  City"
                      name="city"
                      value={this.state.city}   
                      onChange={this.handleChnage}                      
                   />
                  </div>
                </div>

                <div className="col-md-3">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter  Pin"
                      name="pin"
                      value={this.state.pin}   
                      onChange={this.handleChnage}                      
                   />
                  </div>
                </div>

                <div className="col-md-3">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter  PAN"
                      name="pan_no"
                      value={this.state.pan_no}   
                      onChange={this.handleChnage}                     
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Parmanent Address"
                      name="parmanent_address"
                      value={this.state.parmanent_address}   
                      onChange={this.handleChnage}
                   />
                  </div>
                </div>

                
                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Account No"
                      name="account_no"
                      value={this.state.account_no}   
                      onChange={this.handleChnage} 
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter IFSC Code"
                      name="ifsc_code"
                      value={this.state.ifsc_code}   
                      onChange={this.handleChnage} 
                   />
                  </div>
                </div>
  
              
  
            </div>
            </div>
                         
            
            </Modal.Body>
            <Modal.Footer>
              
              <Button variant="primary" onClick={()=>this.submitModal()}>
                Save Changes
              </Button>
              <Button onClick={()=>this.handleModal()} variant="secondary">Close</Button>
            </Modal.Footer>
          </Modal>
          </div>  
   {/*  End Edit Model */}


   {/* Start Show Data */}

   <div id="showModal">
          <Modal size="lg" show={this.state.show1} onHide={()=>this.handleModal2()}>
                <Modal.Header closeButton>
                  <Modal.Title>User Id: {this.state.userID}</Modal.Title>
               </Modal.Header>
              <Modal.Body>
                  
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                      
                  <ul className="list-group w-70">
                  <li className="list-group-item">First Name:{this.state.fname}</li>
                  <li className="list-group-item">DOB:{this.state.dob}</li>
                  <li className="list-group-item">Email :{this.state.email}</li>
                  <li className="list-group-item">Father Name: {this.state.father_name}</li>
                  <li className="list-group-item">Gendet:{this.state.gender}</li>
                  <li className="list-group-item">Qualification: {this.state.highest_qualification}</li>
                  <li className="list-group-item">Present Address: {this.state.address}</li>
                  <li className="list-group-item">City: {this.state.city}</li>
                  <li className="list-group-item">Parmanent Address: {this.state.parmanent_address}</li>
                  <li className="list-group-item">Banke Name: {this.state.bank_name}</li>
                  <li className="list-group-item">IFSC: {this.state.ifsc_code}</li>
                </ul>

                  </div>
                  <div className="col-md-6">
                    
                  <ul className="list-group w-70">
                  <li className="list-group-item">Last Name: {this.state.lname}</li>
                  <li className="list-group-item">Mobole No: {this.state.mobile}</li>
                  <li className="list-group-item">Blod Group: {this.state.blood_group}</li>
                  <li className="list-group-item">Father Mobile: {this.state.father_name}</li>
                  <li className="list-group-item">Adhar: {this.state.adhar_no}</li>
                  <li className="list-group-item">Pass Year: {this.state.pass_year}</li>
                  <li className="list-group-item">State: {this.state.state}</li>
                  <li className="list-group-item">Pin Code: {this.state.pin}</li>
                  <li className="list-group-item">PAN No: {this.state.pan_no}</li>
                  <li className="list-group-item">Account No: {this.state.account_no}</li>
                  
                </ul>

                  </div>
                </div>
              </div>
                
                
                
                      
            </Modal.Body>
            <Modal.Footer>              
              
              <Button onClick={()=>this.handleModal2()} variant="secondary">Close</Button>
            </Modal.Footer>
          </Modal>
          </div> 
   {/* End Show Model */}

         </div>        
        )
      }
    }

export default ShowData;