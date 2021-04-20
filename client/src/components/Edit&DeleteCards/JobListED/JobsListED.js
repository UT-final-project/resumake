import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faTrashAlt, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import './JobListED.css'

function JobListED(props){
  return (
    <section>
      <h2 className="category"><span className="fa-icon"><FontAwesomeIcon icon={faBuilding}/></span> Employment</h2>
      {props.employment.length ? (
        props.employment.map(jobs => { return (
          <div key={Math.random().toString(36).substr(2, 9)}>
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-6">
                    <h3 className="card-title d-flex align-items-center">{jobs.prevEmployer}</h3>
                  </div>
                  <div className="col-6">
                    <p className="dates d-flex justify-content-end">{jobs.startDateMonth} {jobs.startDateYear} - {jobs.endDateMonth} {jobs.endDateYear}</p>
                  </div>
                </div>      
              </div>
              <div className="card-body">
                <h5 className="job-title">{jobs.jobTitle}</h5>
                <p className="card-text">{jobs.jobDescription}</p>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-secondary job-btn"><FontAwesomeIcon icon={faPenAlt}/> Edit</button>
                <button type="button" class="btn btn-secondary job-btn" onClick={() => props.removeJob(jobs.id)}><FontAwesomeIcon icon={faTrashAlt}/> Delete</button>
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

export default JobListED;