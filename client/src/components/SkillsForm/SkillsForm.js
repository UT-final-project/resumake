import React from 'react';
import SkillsList from '../Lists/SkillsList/SkillsList'
import '../UserForm/userForm.css';

function SkillsForm(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1 className="form-title">Skills</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="skillsInput" className="txtInput-heading">Add One</label>
                            <input type="text" className="form-control" id="skillsInput" placeholder="ex. Javascript, Data Structures and Algorithms, React, etc." name="skill" value={props.values} onChange={props.handleChange}/>
                        </div>
                    </form>
                    <button type="submit" className="btn add-btn" onClick={props.addSkill}>+ Add</button>
                    <br />
                    <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
                    <button type="button" className="btn continue-btn" onClick={props.nextStep}>Continue</button>
                    <br/>
                    {props.skillList.length ? (
                        <section>
                            <div>
                                <h1 className="form-title">Preview</h1>
                                <hr/>
                                <br/>
                            </div>
                            <SkillsList values={props.skillList}/>
                        </section>
                    ):( <div/>)}
                </div>
            </div>
        </div>
    )
}

export default SkillsForm;