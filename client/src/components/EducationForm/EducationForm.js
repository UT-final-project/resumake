import React from 'react';
import '../UserForm/userForm.css';

function EducationForm(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1 className="form-title">Education</h1>
                    <form>
                        <div className="form-group">
                            <label for="prevEmployerInput" className="txtInput-heading">Degree</label>
                            <input type="text" class="form-control" id="prevEmployerInput" placeholder="ex. Bachelor's of Science in Computer Science" name="degree" defaultValue={props.values.degree} onChange={props.handleChange}/>
                            <label for="jobTitleInput" className="txtInput-heading">University/College</label>
                            <input type="text" class="form-control" id="jobTitleInput" placeholder="ex. The University of Texas at Austin" name="school" defaultValue={props.values.school} onChange={props.handleChange}/>
                            <div className="row">
                                <div className="col-md-2">
                                    <label for="exampleFormControlSelect1" className="txtInput-heading">Start Year</label>
                                    <select class="form-control month-dropdown" id="exampleFormControlSelect1" name="startYear" defaultValue={props.values.startYear} onChange={props.handleChange}>
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
                                <div className="col-md-2">
                                    <label for="exampleFormControlSelect1" className="txtInput-heading">End Year</label>
                                    <select class="form-control month-dropdown" id="exampleFormControlSelect1" name="endYear" defaultValue={props.values.endYear} onChange={props.handleChange}>
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
                    <button type="submit" className="btn add-btn">+ Add</button>
                    <br />
                    <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
                    <button type="button" className="btn continue-btn" onClick={props.nextStep}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default EducationForm;