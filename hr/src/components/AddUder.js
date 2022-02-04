import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import HeadBarPage from './HeadBarPage';
import SideBarPage from './SideBarPage';
import './CSS/AddUser.css';
import axios from 'axios';
import PhoneInput from 'react-phone-number-input/input';

class AddUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fname: "",
            lname: "",
            dob: "",
            mobile: "",
            email: "",
            blood_group: "",

            father_name: "",
            father_mob_no: "",
            gender: "",
            adhar_no: "",
            highest_qualification: "",
            pass_year: "",
            address: "",
            state: "",
            city: "",
            pin: "",
            pan_no: "",
            parmanent_address: "",
            bank_name: "",
            account_no: "",
            ifsc_code: "",

            signlg: false,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.setAddUserSate = this.setAddUserSate.bind(this);

    }

    handleChnageALl = (event) => {

        this.setState({ [event.target.name]: event.target.value })

    }

    setAddUserSate = () => {
        this.setState({ signlg: true });
    }
    // Submit function start here

    handleSubmit = (event) => {
        event.preventDefault();


        let formData = new FormData();
        formData.append('fname', this.state.fname);
        formData.append('lname', this.state.lname);
        formData.append('dob', this.state.dob);
        formData.append('mobile', this.state.mobile);
        formData.append('email', this.state.email);
        formData.append('blood_group', this.state.blood_group);
        formData.append('father_name', this.state.father_name);
        formData.append('father_mob_no', this.state.father_mob_no);
        formData.append('gender', this.state.gender);
        formData.append('adhar_no', this.state.adhar_no);
        formData.append('highest_qualification', this.state.highest_qualification);
        formData.append('pass_year', this.state.pass_year);
        formData.append('address', this.state.address);
        formData.append('state', this.state.state);
        formData.append('city', this.state.city);
        formData.append('pin', this.state.pin);
        formData.append('pan_no', this.state.pan_no);
        formData.append('parmanent_address', this.state.parmanent_address);
        formData.append('bank_name', this.state.bank_name);
        formData.append('account_no', this.state.account_no);
        formData.append('ifsc_code', this.state.ifsc_code);

        axios.post('http://localhost/login_signup/AddDataUser.php', formData).then((response) => {
            console.log(response.data);
            alert(response.data);
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


        return (

            <div >
                <div>
                    <HeadBarPage />
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-2 sideBarClass">
                            <SideBarPage />

                        </div>


                        <div className="col-xl-10 col-md-12 tbadd">
                            <Card className="" >
                                <Card.Header>Basic Information</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <div className="row">

                                            <div className="tab-content">
                                                <div role="tabpanel" className="tab-pane active" id="step-1">

                                                    <form className="form-horizontal" onSubmit={this.handleSubmit}>
                                                        <div className="col-md-12">
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="ifsc">First Name</label>
                                                                        <input maxlength="15"
                                                                            type="text"
                                                                            required="required"
                                                                            id="fname"
                                                                            name="fname"
                                                                            className="form-control"
                                                                            placeholder="First Name"
                                                                            value={this.state.fname}
                                                                            onChange={this.handleChnageALl}

                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">

                                                                    <div className="form-group">
                                                                        <label for="ifsc">Last Name</label>
                                                                        <input maxlength="100" type="text" required="required" id="lname" name="lname" className="form-control" placeholder="Last Name" value={this.state.lname} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>

                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="dob">DOB</label>
                                                                        <input type="date" id="dob" name="dob" required="required" className="form-control" value={this.state.dob} onChange={this.handleChnageALl} />

                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="mobile">Mob</label>

                                                                        <input maxlength="10" type="text" id="mobile" name="mobile" required="required" className="form-control" placeholder="98765-43210" value={this.state.mobile} onChange={this.handleChnageALl} />

                                                                    </div>
                                                                </div>

                                                            </div>

                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <label for="email">E Mail</label>
                                                                    <div className="form-group">

                                                                        <input maxlength="100" type="email" id="email" name="email" required="required" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChnageALl} />

                                                                    </div>

                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="blood_group">Blood Group</label>
                                                                        <select id="blood_group" name="blood_group" className="form-control" required="required" value={this.state.blood_group} onChange={this.handleChnageALl}>
                                                                            <option value="Na" selected="">Select One</option>
                                                                            <option value="A+">A+</option>
                                                                            <option value="A-">A-</option>
                                                                            <option value="B+">B+</option>
                                                                            <option value="B-">B-</option>
                                                                            <option value="AB+">AB+</option>
                                                                            <option value="AB-">AB-</option>
                                                                            <option value="O+">O+</option>
                                                                            <option value="O-">O-</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="father_name">Father Name</label>
                                                                        <input maxlength="20" type="text" id="father_name" name="father_name" required="required" className="form-control" placeholder="Father Name" value={this.state.father_name} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="father_mob_no">Father Mob</label>
                                                                        <input maxlength="10" type="text" id="father_mob_no" name="father_mob_no" required="required" className="form-control" placeholder="Father Contact" value={this.state.father_mob_no} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="gender">Gender</label>
                                                                        <select id="gender" name="gender" className="form-control" required="required" value={this.state.gender} onChange={this.handleChnageALl}>
                                                                            <option value="Na" selected="">Select</option>
                                                                            <option value="Male">Male</option>
                                                                            <option value="Femail">Femail</option>

                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="adhar_no">Adhar No</label>
                                                                        <input maxlength="12" type="text" id="adhar_no" name="adhar_no" required="required" className="form-control" placeholder="Adhar No" value={this.state.adhar_no} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="ifsc">Qualification</label>
                                                                        <input maxlength="10" type="text" id="highest_qualification" name="highest_qualification" className="form-control" placeholder="High Qualification" value={this.state.highest_qualification} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="pass_year">Year</label>
                                                                        <input maxlength="4" type="text" id="pass_year" name="pass_year" className="form-control" placeholder="Pass Year" value={this.state.pass_year} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label for="address">Present Address</label>
                                                                        <input maxlength="100" type="text" id="address" name="address" required="required" className="form-control" placeholder="Enter Address" value={this.state.address} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="state">State</label>
                                                                        <input maxlength="40" type="text" id="state" name="state" required="required" className="form-control" placeholder="Enter State" value={this.state.state} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="city">City</label>
                                                                        <input maxlength="40" type="text" id="city" name="city" required="required" className="form-control" placeholder="Enter City" value={this.state.city} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="pin">Pin Code</label>
                                                                        <input maxlength="6" type="text" id="pin" name="pin" required="required" className="form-control" placeholder="Enter Pin Code" value={this.state.pin} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="pan_no">PAN No</label>
                                                                        <input maxlength="6" type="text" id="pan_no" name="pan_no" required="required" className="form-control" placeholder="PAN No" value={this.state.pan_no} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label for="parmanent_address">Parmanent Address</label>
                                                                        <input maxlength="100" type="text" id="parmanent_address" name="parmanent_address" required="required" className="form-control" placeholder="Parmanent Address" value={this.state.parmanent_address} onChange={this.handleChnageALl} />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="bank_name">Banke Name</label>
                                                                        <input maxlength="12" type="text" id="bank_name" name="bank_name" required="required" className="form-control" placeholder="Account Name" value={this.state.bank_name} onChange={this.handleChnageALl} />
                                                                    </div>

                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label for="control-label">Account No</label>
                                                                        <input maxlength="12" type="text" id="account_no" name="account_no" required="required" className="form-control" placeholder="9876-5432-1001" value={this.state.account_no} onChange={this.handleChnageALl} />
                                                                    </div>

                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label for="ifsc_code">IFSC NO</label>
                                                                        <input maxlength="20" type="text" id="ifsc_code" name="ifsc_code" required="required" className="form-control" placeholder="IFSC CODE" value={this.state.ifsc_code} onChange={this.handleChnageALl} />
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
                                            <input type="submit" className="btn btn-primary btn-lg" value="Add User" />

                                        </div>
                                    </div>
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
export default AddUser;