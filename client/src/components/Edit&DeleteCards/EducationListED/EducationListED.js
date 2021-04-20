import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faTrashAlt, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import './EducationListED.css';

function EducationList(props){
  return (
    <section>
      <h2 className="category"><span className="fa-icon"><FontAwesomeIcon icon={faGraduationCap}/></span> Education</h2>
      {props.values.length ? (
        props.values.map(school => { return (
          <div key={Math.random().toString(36).substr(2, 9)}>
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col-9">
                    <h3 className="card-title d-flex align-items-center">{school.school}</h3>
                  </div>
                  <div className="col-3">
                    <p className="dates d-flex justify-content-end">{school.startYear} - {school.endYear}</p>
                  </div>
                </div>       
              </div>
              <div className="card-body">
                <h5 className="degree">{school.degree}</h5>
              </div>
              <div class="card-footer">
                <button type="button" class="btn btn-secondary ed-btn"><FontAwesomeIcon icon={faPenAlt}/> Edit</button>
                <button type="button" class="btn btn-secondary ed-btn" onClick={() => props.removeEd(school.id)}><FontAwesomeIcon icon={faTrashAlt}/> Delete</button>
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

export default EducationList;