/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import { Navigation } from "react-minimal-side-navigation";
import { useHistory, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHouseUser, faRegistered, faSignOutAlt, faTable, faUser, faUserPlus, } from '@fortawesome/free-solid-svg-icons';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

export const SideBarPage = () => {
  const history = useHistory();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const commands=[
    {
      command:'open *',
      callback: (site)=>{
        window.open('https://'+site)
      }
    },
    {
      command:'reset',
      callback: ({resetTranscript})=> resetTranscript()
    }
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition(commands);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  const  logout= ()=>{
   
    window.sessionStorage.clear(); 
   

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
              title: "Clander",
              itemId: "/home",
              elemBefore: () => <FontAwesomeIcon icon={faHome} />
            },
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
            {
              title: "Task",
              // itemId: "/about",
              elemBefore: () => <FontAwesomeIcon icon={faTable} />,
              
              subNav: [
                {
                  title: "New Task",
                  itemId: "/CreatTask"
                },
                {
                  title: "View Task",
                  itemId: "/ViewTask"
                }
              ]
            },
            {
              title: "Registar User",
              itemId: "/SignUp",
              elemBefore: () => <FontAwesomeIcon icon={faHouseUser} />
            }
            
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
                
                onClick={logout} />

              }
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId);
            }}
          />
        </div>
        <div>
      {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
      <button onClick={SpeechRecognition.startListening({continuous:true, language:'en-IN'})}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
      </div>
      </React.Fragment>
      
    
  );
};

export default SideBarPage;
