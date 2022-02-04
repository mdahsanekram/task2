import React, { Component} from 'react';
import {Button, Card} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';
import axios from 'axios';
import './CSS/Home.css';
import './CSS/taskCreat.css';
class taskCreat extends Component {
  

   constructor(props) {
      super(props);

       this.arr=[]

       this.state = {
         assign_to:"",
         title:"",
         discreption:"",
         status:"",
         priority:"",
        data:[],
        arrr:[],
        ar2:[],
        signlg : false,
        
       }
     
       
   }
   handleChnageALl = (event) =>{

      this.setState({[event.target.name ] : event.target.value});

  }
   
  componentDidMount() {
  //  axios.post('http://localhost/login_signup/SelectuserTask.php')
  axios.post('http://localhost/login_signup/SelectuserTask.php')
   
     .then((response) => {
       var tdata = response.data;
       this.setState ({data : tdata});
       


       var ar4=[]; // local 2d array
       tdata.map((Update,index)=>{
       ar4.push([Update.id,Update.fname+" "+Update.lname]);
       }
       );
      //  alert(ar4[0]);
       this.setState({ar2:ar4})






       tdata.map((user, index) => (
           this.arr.push(user.fname +" " + user.lname) 
      )                

       );
       this.setState({arrr:this.arr});
       
       

     }).catch(function (error) {
       alert(error);
     })
   }

   
   submitModal = (event) =>{
		// event.preventDefault();

      let formData = new FormData();
      formData.append('userID',window.sessionStorage.userID);

      formData.append('assign_to',this.state.assign_to);
      formData.append('title',this.state.title);
      formData.append('discreption',this.state.discreption);
      formData.append('deadline',this.state.deadline);
      formData.append('status',this.state.status);
      formData.append('priority',this.state.priority);
      
      axios.post('http://localhost/login_signup/AddTask.php',formData).then((response)=>{
              
               
				if(response.data ==="Data Inserted")
				{
					console.log(response.data);
					// this.setState({signlg : true});
				}
				else
				{
					// this.setState({signlg:false});
				}
			}).catch(function(error){
				alert(error)
			})
   }



   render() {
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
            <Card className="text-center taskhead" style={{ width: '38rem'}}>
                <Card.Header>Create Task </Card.Header>
                    <Card.Body>
                     
                        <Card.Text>
                        <div className="row">
                           <div className="col-md-4" >
                           
						               <select name="assign_to" id="assign_to" vlaue={this.state.assign_to}  className="form-control" onChange={this.handleChnageALl}>
							               <option value={this.state.user}  disabled selected>Assing To</option>
							               {this.state.ar2.map((name)=>(
                                    <option value={name[0]}> {name[1]}</option>
                                    ))
                                    }
                                    
						               </select>                
						         </div>
                           <div className="col-md-8">
						             <input type="text" placeholder="Title" className="form-control" 
                                 id="title"
                                 name="title"
                                 value={this.state.title} 
                                 onChange={this.handleChnageALl}/>						
					             </div>
                  
					         </div>
                        <div className="row">
                        <div className="col-md-12">
                        <div className="form-group">
                         <label for="discreption" >Message</label>
                         <textarea className="form-control" rows="2" placeholder="Task Description.." 
                           id="discreption"
                           name="discreption"
                            value={this.state.discreption} 
                            onChange={this.handleChnageALl} 
                         />
                         
                      </div>
                      </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                        
						             <input type="datetime-local" placeholder="Date" className="form-control"
                                 id="deadline"
                                 name="deadline"
                                 value={this.state.deadline} 
                                 onChange={this.handleChnageALl}
                               />						
					             

                        </div>
                        <div className="col-md-6" >
                        
						               <select className="form-control"
                                 id="priority"
                                 name="priority"
                                 value={this.state.priority} 
                                 onChange={this.handleChnageALl}>

							               <option value="" disabled selected>priority</option>
							               <option value="1">Lower</option>
                                    <option value="2">Middle</option>
                                    <option value="3">High</option>
							               
						               </select>                
						         </div>
                        </div>
                
                
                             

                        
                        </Card.Text>
                        <Button variant="primary"  onClick={()=>this.submitModal()}>Add Task</Button>
                        
                    </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
            </div>



            </div>
            
            </div>
            
        </div>
      );
   }
}
export default taskCreat;

