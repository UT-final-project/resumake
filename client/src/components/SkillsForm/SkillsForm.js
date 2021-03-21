import React from 'react';
import '../UserForm/userForm.css';

function SkillsForm(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1 className="form-title">Skills</h1>
                    <form>
                        <div className="form-group">
                            <label for="skillsInput" className="txtInput-heading">Skills</label>
                            <input type="text" class="form-control" id="skillsInput" placeholder="ex. Javascript, Data Structures and Algorithims, React, etc." name="skill" onChange={props.handleChange}/>
                        </div>
                    </form>
                    <button type="submit" className="btn add-btn">+ Add</button>
                    <br />
                    <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
                    <button type="button" className="btn continue-btn" onClick={props.nextStep}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default SkillsForm;