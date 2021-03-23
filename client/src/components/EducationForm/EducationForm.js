import React from 'react';
import EduList from '../Lists/EducationList/EducationList';
import _ from "lodash";
import '../UserForm/userForm.css';

function EducationForm(props){
    const current = new Date();
    // lodash to generate 50 years worth of options in descending order
    const years = _.orderBy(_.range(current.getFullYear() - 50, current.getFullYear()+1), null, 'desc');
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1 className="form-title">Education</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="prevEmployerInput" className="txtInput-heading">Degree</label>
                            <input type="text" className="form-control" id="prevEmployerInput" placeholder="ex. Bachelor's of Science in Computer Science" name="degree" value={props.values.degree} onChange={props.handleChange}/>
                            <label htmlFor="jobTitleInput" className="txtInput-heading">University/College</label>
                            <input type="text" className="form-control" id="jobTitleInput" placeholder="ex. The University of Texas at Austin" name="school" value={props.values.school} onChange={props.handleChange}/>
                            <div className="row">
                                <div className="col-md-2">
                                    <label htmlFor="exampleFormControlSelect1" className="txtInput-heading">Start Year</label>
                                    <select className="form-control month-dropdown" id="exampleFormControlSelect1" name="startYear" value={props.values.startYear} onChange={props.handleChange}>
                                        <option>- Year -</option>
                                        {years.map(year => { 
                                            return (
                                                <option key={Math.random().toString(36).substr(2, 9)}>{year}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="exampleFormControlSelect1" className="txtInput-heading">End Year</label>
                                    <select className="form-control month-dropdown" id="exampleFormControlSelect1" name="endYear" value={props.values.endYear} onChange={props.handleChange}>
                                        <option>- Year -</option>
                                        {years.map(year => { 
                                            return (
                                                <option key={Math.random().toString(36).substr(2, 9)}>{year}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                    <button type="submit" className="btn add-btn" onClick={props.addEdu}>+ Add</button>
                    <br />
                    <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
                    <button type="button" className="btn continue-btn" onClick={props.nextStep}>Continue</button>
                    <br/>
                    {props.eduHistory.length ? (
                        <div>
                            <h1 className="form-title">Preview</h1>
                            <hr/>
                            <br/>
                        </div>
                    ):( <div/>)}
                    <EduList values={props.eduHistory}/>
                </div>
            </div>
        </div>
    )
}

export default EducationForm;