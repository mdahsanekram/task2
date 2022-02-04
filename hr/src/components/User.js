import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';

const User = (props) => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    address: "",
    data :[],
  });
  const { ID } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    
    // const res = await axios.get(`http://dashbord.atspace.cc/login_signup/ShowUser.php/${ID}`);
    const res = await axios.get(`http://localhost/login_signup/ShowUser.php/${ID}`);
    setUser(res.data);
  };
  return (
    <>
     <div>
          <HeadBarPage/>
          </div>



          <div className="container-fluid">
              <div className="row">
              <div className="col-xl-2 sideBarClass">
              <SideBarPage/>

              </div>
              <div className="col-xl-10">
              

              
    <div className="container py-4">
      <Link className="btn btn-primary" to="/ShowData">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {user.data}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Name: {user.fname}</li>
        <li className="list-group-item">Email Id: {user.lname}</li>
        <li className="list-group-item">Phone: {user.email}</li>
        <li className="list-group-item">Adhar: {user.mobile}</li>
        <li className="list-group-item">DOB: {user.address}</li>
      </ul>
    </div>

    
    </div>
    </div>
    </div>
    </>
  );
};

export default User;
