import React from 'react';
import CertList from '../Lists/CertificationList/CertificationList'
import '../UserForm/userForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function CertificateForm(props){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <h1 className="form-title">Certifications</h1>
                <hr />
                    <form>
                        <div className="form-group">
                            <label htmlFor="certInput" className="txtInput-heading">Certifications</label>
                            <input type="text" className="form-control" id="certInput" placeholder="ex. Certificate of Completion: Computer Science Career Path" name="certificate" value={props.values.certificate} onChange={props.handleChange}/>
                            <label htmlFor="awardedByInput" className="txtInput-heading">Awarded By</label>
                            <input type="text" className="form-control" id="awardedByInput" placeholder="ex. Codecademy" name="awardedBy" value={props.values.awardedBy} onChange={props.handleChange}/>
                        </div>
                    </form>
                    <button type="submit" className="btn add-btn" onClick={props.addCert}><FontAwesomeIcon icon="plus"/> Add</button>
                    <br />
                    <button type="button" className="btn back-btn" onClick={props.prevStep}><FontAwesomeIcon icon="arrow-left"/> Back</button>
                    <button type="button" className="btn continue-btn" onClick={props.nextStep}><FontAwesomeIcon icon="arrow-right"/> Continue</button>
                    <br/>
                    {props.certHistory.length ? (
                        <section>
                            <div>
                                <h1 className="form-title">Preview</h1>
                                <hr/>
                                <br/>
                            </div>
                            <CertList values={props.certHistory}/>
                        </section>
                    ):( <div/>)}
                </div>
            </div>
        </div>
    )
}

export default CertificateForm;