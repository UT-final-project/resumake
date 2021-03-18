import React from 'react';
import '../UserForm/userForm.css';

function CertificateForm(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1 className="form-title">Certifications</h1>
                    <form>
                        <div className="form-group">
                            <label for="certInput" className="txtInput-heading">Certifications</label>
                            <input type="text" class="form-control" id="certInput" placeholder="ex. Certificate of Completion: Computer Science Career Path" name="certificate" defaultValue={props.values.certificate} onChange={props.handleChange}/>
                            <label for="awardedByInput" className="txtInput-heading">Awarded By</label>
                            <input type="text" class="form-control" id="awardedByInput" placeholder="ex. Codecademy" name="awardedBy" defaultValue={props.values.awardedBy} onChange={props.handleChange}/>
                        </div>
                    </form>
                    <button type="button" className="btn back-btn" onClick={props.prevStep}>Back</button>
                    <button type="button" className="btn continue-btn" onClick={props.nextStep}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default CertificateForm;