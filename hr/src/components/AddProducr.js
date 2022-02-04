import React, {Component}  from 'react';
import {Button, Card} from 'react-bootstrap';
import Select from 'react-select';
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';
import axios from 'axios';

class AddProduct extends Component {
    constructor(props){
        super(props);
        
    }
        render(){
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

              <div className="col-xl-10 mb-3 mt-3 tbl">
              <Card className="text-center taskheadAdd" style={{ width: '48rem'}}>
                <Card.Header>Add Product Table</Card.Header>
                    <Card.Body>
                     
                        <Card.Text>
                        <div class="row">
                           <div className="col-md-3" >
                                         
						               <Select name="assign_to" id="assign_to" placeholder="Company"  class="form-control" onChange={this.handleChnageALl}>
							               <option  disabled selected>Company </option>
							               {/* {this.state.id.map((Icd)=>(
                                    <option value={this.state.id} >{Icd} </option>
                                    ))
                                    } */}
                                    
						               </Select>                
						         </div>

                                 <div className="col-md-3" >
                                 
						               <Select name="assign_to" id="assign_to" placeholder="Product" class="form-control" onChange={this.handleChnageALl}>
							               <option  disabled selected>Product</option>
							               {/* {this.state.id.map((Icd)=>(
                                    <option value={this.state.id} >{Icd} </option>
                                    ))
                                    } */}
                                    
						               </Select>                
						         </div>

                                 <div className="col-md-3" >
                                        
						               <Select name="assign_to" id="assign_to" placeholder="Color" class="form-control" onChange={this.handleChnageALl}>
							               <option  disabled selected>Color </option>
							               {/* {this.state.id.map((Icd)=>(
                                    <option value={this.state.id} >{Icd} </option>
                                    ))
                                    } */}
                                    
						               </Select>                
						         </div>

                                 <div className="col-md-3" >
                                 
						               <Select name="assign_to" id="assign_to" placeholder="Categry" class="form-control" onChange={this.handleChnageALl}>
							               <option  disabled selected>Color </option>
							               {/* {this.state.id.map((Icd)=>(
                                    <option value={this.state.id} >{Icd} </option>
                                    ))
                                    } */}
                                    
						               </Select>                
						         </div>
                                 

                                 </div>
                        
                        <div className="row">
                        <div className="col-md-12">
                        <div className="form-group">
                         {/* <label for="discreption" >Message</label> */}
                         {/* <textarea className="form-control" rows="2" placeholder="Task Description.." 
                           id="discreption"
                           name="discreption"
                            value={this.state.discreption} 
                            onChange={this.handleChnageALl} 
                         /> */}
                         
                      </div>
                      </div>
                      </div>

                      <div className="row">
                      <div className="col-md-3" >
                      
						    <Select name="assign_to" id="assign_to" placeholder="Size" class="form-control" onChange={this.handleChnageALl}>
							    <option  disabled selected>Size Text</option>
							    
                        
						    </Select>                
						</div>
                        <div className="col-md-3">  
                                              
						   <input type="text" placeholder="Quantity" class="form-control"
                            id="deadline"
                            name="deadline"
                            value=""
                           //  onChange={this.handleChnageALl}
                          />		           
                        </div>
                        <div className="col-md-3"> 
                                              
						    <input type="text" placeholder="MRP" class="form-control"/>						
					             

                        </div>
                        <div className="col-md-3" > 
                        <input type="text" placeholder="Price" class="form-control"/>	              
                                      
						</div>
                    </div>
                
                
                             

                        
                        </Card.Text>
                        <Button variant="primary"  onClick={()=>this.submitModal()}>Add Product</Button>
                        
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

export default AddProduct;