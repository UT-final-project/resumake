import React from 'react';
import '../UserForm/userForm.css'

function AbstractForm(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="form-title">Abstract/Summary</h1>
                    <p className="form-paragraph">The Abstract section of your resume is one of the first thing employers see in your resume.
                    Every professional has unique skills and experiences they've aquired over the course of their career.
                    This is where you're going to want to highlight those experiences in a short, concise manner.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="form-group">
                            <label htmlFor="abstractTextArea" className="txtInput-heading">Abstract/Summary</label>
                            <textarea className="form-control" id="abstractTextArea" rows="8" defaultValue={props.value} onChange={props.handleChange}/>
                        </div>
                    </form>
                    <button type="button" className="btn continue-btn" onClick={props.nextStep}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default AbstractForm;