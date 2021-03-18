import React from 'react';
import '../UserForm/userForm.css'

function WorkForm(props){
    // const { values } = props.values

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="form-title">Work History</h1>
                    <form>
                    <div className="form-group">
                        <label for="prevEmployerInput" className="txtInput-heading">Previous Employer</label>
                        <input type="text" className="form-control" id="prevEmployerInput" placeholder="ex. Google LLC" name="prevEmployer" defaultValue={props.values.prevEmployer} onChange={props.handleChange}/>
                        <label for="jobTitleInput" className="txtInput-heading">Job Title</label>
                        <input type="text" className="form-control" id="jobTitleInput" placeholder="ex. Software Engineer" name="jobTitle" defaultValue={props.values.jobTitle} onChange={props.handleChange}/>
                        <label for="jobDescriptionInput" className="txtInput-heading">Job Description</label>
                        <textarea className="form-control" id="jobDescriptionInput" rows="3" onChange={props.handleChange} name="jobDescription" defaultValue={props.values.jobDescription}/>
                        <div className="row">
                            <div className="col-sm-3">
                                <label for="startDateSelect" className="txtInput-heading">Start Date (mm/yyyy)</label>
                                <select className="form-control month-dropdown" id="startDateSelect" name="startDateMonth" defaultValue={props.values.startDateMonth} onChange={props.handleChange}>
                                    <option>- Month -</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <select className="form-control month-dropdown" id="startDateSelect" name="startDateYear" defaultValue={props.values.startDateYear} onChange={props.handleChange}>
                                    <option>- Year -</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                </select>
                            </div>
                            <div className="col-sm-3">
                                <label for="startDateSelect" className="txtInput-heading">End Date (mm/yyyy)</label>
                                <select className="form-control month-dropdown" id="startDateSelect" name="endDateMonth" defaultValue={props.values.endDateMonth} onChange={props.handleChange}>
                                    <option>- Month -</option>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <select className="form-control month-dropdown" id="startDateSelect" name="endDateYear" defaultValue={props.values.endDateYear} onChange={props.handleChange}>
                                    <option>- Year -</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                    <option>2007</option>
                                    <option>2008</option>
                                    <option>2009</option>
                                    <option>2010</option>
                                    <option>2011</option>
                                    <option>2012</option>
                                    <option>2013</option>
                                    <option>2014</option>
                                    <option>2015</option>
                                    <option>2016</option>
                                    <option>2017</option>
                                    <option>2018</option>
                                    <option>2019</option>
                                    <option>2020</option>
                                    <option>2021</option>
                                    <option>Present</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    </form>
                    <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
                    <button type="button" className="btn continue-btn" onClick={props.nextStep}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default WorkForm;