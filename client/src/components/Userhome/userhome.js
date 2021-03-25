import React, { useEffect, useContext, useState } from 'react';
import './userhome.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserContext from "../../utils/UserContext";
import { Link } from "react-router-dom";
import { set } from 'mongoose';


function Userhome({ getUser }) {
    const { user } = useContext(UserContext);
    const [userId, setUserId] = useState();


    function capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // useEffect(() => {
    //     let mounted = true;
    //     if (mounted) {
    //         getUser(user);
    //     };
    //     return function cleanup() {
    //         mounted = false;
    //     };
    // }, []);

    useEffect(() => {
        console.log(user);
        if (!user) {
            return
        } else {
            setUserId(user._id);
        }
    }, [user]);

    function editUserBtn(e) {
        e.preventDefault();
        window.location.href = `/resume/${userId}`;
    }


    return (
        // Whole Container
        <div className="container col-12">
            <div className="row">
                <div className="col-12">
                    {user ? (<h1 className="welcometext d-flex justify-content-center">Hi, {capitalize(user.firstname)} {capitalize(user.lastname)}!</h1>) :
                        (<h1 className="welcometext d-flex justify-content-center">No User Logged In!</h1>)}
                    <br />
                    <br />
                </div>
            </div>
            <div className="container col-12 d-flex justify-content-around">
                <div className="row">
                    <div className="col-md-6 resumesection">
                        <h2 d-flex justify-content-around>Your Resume</h2>
                        <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/67a757a95b943e9b8f3d76453b596c4549c7f236/client/svg-images/undraw_fill_form_re_cwyf.svg" alt="resume" className="userhomeimg" />
                        <br />
                        <br />
                        <div className="row d-flex justify-content-around">
                            {user ? <div className="col-12"><button type="button" className="btn userhomebtn editresume-btn" onClick={editUserBtn}>
                                <FontAwesomeIcon icon="pen-fancy" /> Edit Resume</button></div>
                                : <div className="col-12"><button type="button" className="btn userhomebtn editresume-btn">
                                    <FontAwesomeIcon icon="pen-fancy" /> Edit Resume</button></div>}
                        </div>
                    </div>
                    <div className="col-md-6 resumesection">
                        <h2>View Resume</h2>
                        <img src="https://raw.githubusercontent.com/UT-final-project/group1-final-project/5f481a4475ec3b4d454c996f4820d661a32abcb3/client/svg-images/undraw_Hiring_re_yk5n.svg" alt="webpage" className="userhomeimg" />
                        <br />
                        <br />
                        <div className="row">
                            <div className="col-12"><button type="button" className="btn userhomebtn viewwebpage-btn"><FontAwesomeIcon icon="pen-fancy" /> View Resume</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userhome;