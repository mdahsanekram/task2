// https://www.youtube.com/watch?v=6QvNCZQWDZk
import React, {Component, useState} from 'react';
import { Redirect } from 'react-router-dom';
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';
import {Modal,Button} from 'react-bootstrap';
import './CSS/ShowData.css';
import axios from 'axios';
import { faDeaf, faEdit,  faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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
          model1 : false,
          model2:false,
          loggedIn : true,
          data : [],
          cols:[],
          offset: 0,
          tableData: [],
          orgtableData: [],
          perPage: 9,
          currentPage: 0,
          isVarified : false,
            name   : "",
            school   : "",
            dob     : "",
            class  : "",
            mob:"",
            email :"",
            address:"",
            city:"",
            state:"",
            pin:"",
            marks:"",
            fname:"",
            count:0,           
           
           
            userID : 0,
      }
      //  this.handleChange = this.handleChange.bind(this);   
       const token = window.sessionStorage.getItem("userID");


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

    componentDidMount()
      {         
        axios.post('http://localhost/student/Showdata.php')
        
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
                console.log(error);
            })

    }


  handleModal = () =>{
      this.setState({model1:!this.state.model1});

  }

  handleEditModel = (userID) =>
  {
                this.setState({model1:true});
                console.log(userID)
                let formData = new FormData();                
                formData.append("userID",userID);
    axios.post('http://localhost/student/EditData.php',formData)
    .then((response)=>{
      
      console.log("data",response.data[0].Id)            
               
                this.setState ({userID : response.data[0].Id, 
                  name:response.data[0].name,
                  fname:response.data[0].fname,
                  mob:response.data[0].mob,
                  email:response.data[0].email,
                  address:response.data[0].address,
                  city:response.data[0].city,
                  pin:response.data[0].pin,
                  dob:response.data[0].dob,
                  class:response.data[0].class,
                  state:response.data[0].state,
                  marks:response.data[0].marks,
                })               

      }).catch(function(error)
      {
        alert(error);
      });
  }

  handleModalGetData3 = (userID) => {
                
                let formData = new FormData();                
                formData.append("userID",userID);
    axios.post('http://localhost/student/DeletData.php',formData)
    .then((response)=>{ 
      console.log("data",response);  

      this.componentDidMount();             

      }).catch(function(error)
      {
        alert(error);
      });
  }


  submitModal =()=>{
                let formData = new FormData();
                formData.append("userID",this.state.userID);	         
                formData.append('name',this.state.name);
			          formData.append('fname',this.state.fname);
                formData.append('mob',this.state.mob);
                formData.append('email',this.state.email);
                formData.append('address',this.state.address);
                formData.append('city',this.state.city);
                formData.append('pin',this.state.pin);
                formData.append('class',this.state.class);
                formData.append('state',this.state.state);
                formData.append('marks',this.state.marks);
                formData.append('dob',this.state.dob);


          axios.post('http://localhost/student/UpdateStudent.php',formData)
          .then((response)=>{
            
            console.log("response.data",response.data)
                 
          if(response.data === "Data Update")
          {
            this.setState({model1:false})
            this.componentDidMount();
            this.setState ({userID : "", 
                name:"",
                fname:"",
                mob:"",
                email:"",
                address:"",
                city:"",
                pin:"",
                dob:"",
                class:"",
                state:"",
                marks:""
            }) 


          }
          else
          {
            this.setState({loggedIn :false});
          }
        }).catch(function(error){
          alert(error)
        })
  }

handleAddNew=()=>{
        
  let formData = new FormData(); 
        formData.append('name',this.state.name);
        formData.append('fname',this.state.fname);
			  formData.append('school',this.state.school);
        formData.append('dob',this.state.dob);
			  formData.append('class',this.state.class);
        formData.append('address',this.state.address);
        formData.append('city',this.state.city);
			  formData.append('state',this.state.state);  
        formData.append('class',this.state.class);
        formData.append('address',this.state.address);
        formData.append('city',this.state.city);
			  formData.append('state',this.state.state);
        formData.append('mob',this.state.mob); 
        formData.append('email',this.state.email);
        formData.append('pin',this.state.pin)
        formData.append('marks',this.state.marks) 

        axios.post('http://localhost/student/AddDataUser.php',formData).then((responce)=>{
        console.log(responce.data)
        this.componentDidMount(); 

        })


  this.setState({model2:false})
  
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

    return(
        <div >
          <div>
          <HeadBarPage/>
          </div>
              <div className="container-fluid">
              <div className="row">
              <div className="col-xl-12 mb-3 mt-3 tbl">
              <div className="search"> 
                <Button onClick={()=>this.setState({model2:true})}>Enroll New Student</Button>
              </div>
                  <table className="table table-striped table-bordered table-sm row-border hover ">  
                      <thead>  
                        <tr>
                          <th scope="col">Sr. No. </th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone</th>
                          <th scope="col">Class</th>
                          <th scope="col">Marks%</th>                         
                          <th scope="col">Action</th> 
                        </tr>
                      </thead>
                      
                      <tbody>
                        {this.state.tableData?                        
                            this.state.tableData.map((user,index)=>(                            
                                <tr key={user.Id}>
                                   <td>{index+1}</td>
                                    <td>{user.name} </td>
                                    <td>{user.email}</td>
                                    <td>{user.mob}</td>
                                    <td>{user.class}</td>
                                    <td>{user.marks} </td>
                                       <td >                                       
                                      <Button type="button" className="btn btn-outline-secondary mr-2" onClick={()=>this.handleEditModel(user.id)}>
                                      <FontAwesomeIcon icon={faEdit} />
                                      </Button>                             

                                      <Button type="button" className="btn btn-danger mr-2" onClick={()=>this.handleModalGetData3(user.id)} >
                                      <FontAwesomeIcon icon={faTrashAlt} />
                                      </Button>                                      
                                     </td>          
                                </tr>
                            ))
                            
                       :null }
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

          <div >          
          <Modal size="lg" show={this.state.model1} onHide={()=>this.handleModal()} >            
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
                      placeholder="Student   Name"
                      name="name"  
                      value={this.state.name}   
                      onChange={this.handleChnage}                    
                      />
                  </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Father Name"
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
                      placeholder="Phone"
                      name="mob"
                      value={this.state.mob}   
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
                      type="date"
                      className="form-control form-control-lg"
                      placeholder="DOB"
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
                      placeholder="Enter Class"
                      name="class"
                      value={this.state.class}   
                      onChange={this.handleChnage}              
                   />
                  </div>
                </div>          
                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Address"
                      name="address"
                      value={this.state.address}   
                      onChange={this.handleChnage}                     
                   />
                  </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter City"
                      name="city"
                      value={this.state.city}   
                      onChange={this.handleChnage}                    
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter State"
                      name="state"
                      value={this.state.state}   
                      onChange={this.handleChnage}                    
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Pin"
                      name="pin"
                      value={this.state.pin}   
                      onChange={this.handleChnage}                    
                   />
                  </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Marks"
                      name="marks"
                      value={this.state.marks}   
                      onChange={this.handleChnage}                    
                   />
                  </div>
                </div>


               </div>
            </div>  
            </Modal.Body>
            <Modal.Footer>              
            <Button onClick={()=>this.handleModal()} variant="secondary">Close</Button>
            <Button variant="primary" onClick={()=>this.submitModal()}> Save Changes</Button>
            </Modal.Footer>
          </Modal>
          </div>  
   {/*  End Edit Model */}


            {/*  Enroll New */}

            <div >            
<Modal size="lg" show={this.state.model2} onHide={()=>this.setState({model2:false})} >            
      <Modal.Header closeButton>
      <Modal.Title>Enroll new Student </Modal.Title>
     </Modal.Header>
    <Modal.Body>
    <div className="container">
      <div className="row">  
        <div className="col-md-6">
          <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Student   Name"
            name="name"  
            value={this.state.name}   
            onChange={this.handleChnage} 
            required                   
            />
        </div>
      </div>
      <div className="col-md-6">
          <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Father Name"
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
            placeholder="Phone"
            name="mob"
            value={this.state.mob}   
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
            type="date"
            className="form-control form-control-lg"
            placeholder="DOB"
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
            placeholder="Enter Class"
            name="class"
            value={this.state.class}   
            onChange={this.handleChnage}              
         />
        </div>
      </div>

     


      <div className="col-md-6">
          <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Address"
            name="address"
            value={this.state.address}   
            onChange={this.handleChnage}                     
         />
        </div>
      </div>

      <div className="col-md-6">
          <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter City"
            name="city"
            value={this.state.city}   
            onChange={this.handleChnage}                    
         />
        </div>
      </div>

      <div className="col-md-6">
          <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter State"
            name="state"
            value={this.state.state}   
            onChange={this.handleChnage}                    
         />
        </div>
      </div>

      <div className="col-md-6">
          <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Pin"
            name="pin"
            value={this.state.pin}   
            onChange={this.handleChnage}                    
         />
        </div>
      </div>

      <div className="col-md-6">
          <div className="form-group">
            <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter Marks"
            name="marks"
            value={this.state.marks}   
            onChange={this.handleChnage}                    
         />
        </div>
      </div>


     </div>
  </div>  
  </Modal.Body>
  <Modal.Footer>              
  <Button onClick={()=>this.setState({model2:false})} variant="secondary">Close</Button>
  <Button variant="primary" onClick={()=>this.handleAddNew()}> Save Changes</Button>
  </Modal.Footer>
</Modal>
</div>  
{/*  End Edit Model */}
   

         </div>        
        )
      }
    }

export default ShowData;
