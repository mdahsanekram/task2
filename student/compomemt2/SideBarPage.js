/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHouseUser, faRegistered, faSignOutAlt, faTable, faUser, faUserPlus, } from '@fortawesome/free-solid-svg-icons';

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const SideBarPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);


  const  logout= ()=>{
   
    window.sessionStorage.clear(); 
    console.log("CleareDsts");
   

        }

  return (
   
      
      
<React.Fragment>
     

      
       <div
        
      >
       
    

<div className="flex items-center justify-center mt-0 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            
          </span>
        </div>
        
       

        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId);
          }}
          items={[
            
            {
              title: "Show Data",
              itemId: "/ShowData",
              elemBefore: () => <FontAwesomeIcon icon={faUser} />
            },
            {
              title: "Add User",
              itemId: "/AddUser",
              elemBefore: () => <FontAwesomeIcon icon={faUserPlus} />
            },
            
          
            
          ]}
        />

        <div >
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: "Log Out",
                itemId: "/",
                elemBefore: () => <FontAwesomeIcon icon={faSignOutAlt}  
                
                onClick={()=>logout} />

              }
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div>
      </div>
      </React.Fragment>
    
  );
};

export default SideBarPage;
