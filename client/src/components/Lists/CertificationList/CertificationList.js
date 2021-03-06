import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faTrophy } from '@fortawesome/free-solid-svg-icons';
import './CertificationList.css'

function CertList(props){
  return (
    <section>
      <h2 className="category"><span className="fa-icon"><FontAwesomeIcon icon={faTrophy}/></span> Certifications</h2>
      {props.values.length ? (
        props.values.map(cert => { return (
          <div key={Math.random().toString(36).substr(2, 9)}>
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-9">
                    <h3 className="card-title d-flex align-items-center">{cert.certificate}</h3>
                  </div>
                  <div className="col-3">
                    <p className="dates d-flex justify-content-end"><span className="fa-icon"><FontAwesomeIcon icon={faAward}/></span> </p>
                  </div>
                </div>       
              </div>
              <div className="card-body">
                <h5 className="awarded-by">{cert.awardedBy}</h5>
              </div>
            </div>
            <br/>
          </div>
        );})
      ): (
        <div/>
      )}
    </section>
  );
};

export default CertList;
