import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';
import './CSS/Home.css';
import Card from "react-bootstrap/Card";



import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

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
            data : [],
            events: [
                {
                  start: moment().toDate(),
                  end: moment().add(1, "days").toDate(),
                  title: "Some title",
                },
                {
                    id: 0,
                    title: "All Day Event very long title",
                    allDay: true,
                    start: new Date(2015, 3, 0),
                    end: new Date(2015, 3, 1)
                  },
                  {
                    id: 1,
                    title: "Long Event",
                    start: new Date(2015, 3, 7),
                    end: new Date(2015, 3, 10)
                  },
                
                  {
                    id: 2,
                    title: "DTS STARTS",
                    start: new Date(2016, 2, 13, 0, 0, 0),
                    end: new Date(2016, 2, 20, 0, 0, 0)
                  },
                
                  {
                    id: 3,
                    title: "DTS ENDS",
                    start: new Date(2016, 10, 6, 0, 0, 0),
                    end: new Date(2016, 10, 13, 0, 0, 0),
                    desc: "Description is shown here"
                  },
                
                  {
                    id: 4,
                    title: "Leave",
                    start: new Date(new Date().setHours(new Date().getHours() - 3)),
                    end: new Date(new Date().setHours(new Date().getHours() + 3)),
                    desc: "Description is shown here"
                  }
              ],
        }
        const token = window.sessionStorage.getItem("userID");
        console.log("Token:",token);
        
        if(token === null || token === undefined)
        {
            this.state.loggedIn = false;
        }
    }

    onEventResize = (data) => {
        const { start, end } = data;
    
        this.setState((state) => {
          state.events[0].start = start;
          state.events[0].end = end;
          return { events: [...state.events] };
        });
      };
    
      onEventDrop = (data) => {
        console.log(data);
      };

 

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

              <div className="col-xl-10">
              <div className="row">
              <div className="col-md-12">
                <div className="row">
                    <div className="col-md-12" style={{marginTop:"20px"}}>
                   

                    <DnDCalendar
                    defaultDate={moment().toDate()}
                    defaultView="month"
                    events={this.state.events}
                    localizer={localizer}
                    onEventDrop={this.onEventDrop}
                    onEventResize={this.onEventResize}
                    resizable
                    style={{ height: "85vh" }}
                    />              
              


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