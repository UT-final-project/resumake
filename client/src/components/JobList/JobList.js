import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import './JobList.css'

function JobList(props){
  console.log('Props:', props);
  return (
    <section>
      <h2 className="category"><span className="fa-icon"><FontAwesomeIcon icon={faBuilding}/></span> Employment</h2>
      {props.employment.length ? (
        props.employment.map(jobs => { return (
          <div key={Math.random().toString(36).substr(2, 9)}>
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h3 className="card-title d-flex align-items-center">{jobs.prevEmployer}</h3>
                  </div>
                  <div className="col">
                    <p className="dates d-flex justify-content-end">{jobs.startDateMonth} {jobs.startDateYear} - {jobs.endDateMonth} {jobs.endDateYear}</p>
                  </div>
                </div>       
              </div>
              <div className="card-body">
                <h5>{jobs.jobTitle}</h5>
                <p className="card-text">{jobs.jobDescription}</p>
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

export default JobList;
