import React, { Component } from "react";
import {Button, Card} from 'react-bootstrap';
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';
import axios from 'axios';

class ViewTask extends Component{
    constructor(props){
        super(props);
        this.state={
            created_by: "",
            assign_to:"",
            title:"",
            discreption	:"" ,
            deadline :"" ,
            status :"" ,
            priority	:"" ,
            data : []
        }
    }


    componentDidMount()
    {

        axios.post('http://localhost/login_signup/ViewTask.php')

            .then((response)=>{
               

                

                this.setState({data  :  response.data});
               // Document.getElementById('requestSend').interHTML = "Reuest sending...";
               console.log(this.state.data);

            }).catch(function(error)
            {
                alert(error);
            })




    }

    render(){
        
        
        
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
    
                <div className="col-xl-10 col-md-12">
                <Card className="text-center taskheadview" >
                    <Card.Header>View Task</Card.Header>
                        <Card.Body>
                         
                            <Card.Text>
                            <div class="row">
                            <table className="table table-striped table-bordered table-sm row-border hover ">  
                      <thead>  
                        <tr>
                          <th scope="col">Assing By</th>
                          <th scope="col">Assing To</th>
                          <th scope="col">Title</th>
                          
                          <th scope="col">Submit Date</th>
                          <th scope="col">Status</th>
                          <th scope="col">Prority</th>
                          <th scope="col">Description</th>
                        
                        </tr>
                      </thead>
                      <tbody>
                        {
                        
                            this.state.data.map((user,index)=>(
                            
                                <tr key={user.Id}>
                                   
                                    <td>{user.created_by}</td>
                                    <td>{user.assign_to}</td>
                                    <td>{user.title}</td>
                                   
                                    <td>{user.deadline}</td>
                                    <td>{user.status}</td>
                                    <td>{user.priority}</td>
                                    <td>{user.discreption}</td>
                                                  
                            
                                </tr>
                            ))
                            
                        }
                      </tbody>
                      </table>
                             
                                 </div>
                            
                         
                          
                            
                    
                    
                                 
    
                            
                            </Card.Text>
                            {/* <Button variant="primary"  onClick={()=>this.submitModal()}>Add Task</Button> */}
                            
                        </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
                </div>
    
    
    
                </div>
                
                </div>
                
            </div>
        )
    }


}
export default  ViewTask;