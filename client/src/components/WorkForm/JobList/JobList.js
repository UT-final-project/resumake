import React from 'react';

function JobList(props){
  return (
    <section>
      {props.employment.length ? (() => {
        props.employment.map(jobs => { return (
          <div key={Math.random().toString(36).substr(2, 9)}>
            <h2>{jobs.prevEmployer}</h2>
            <h3>{jobs.jobTitle}</h3>
            <span>`{jobs.startDateMonth} {jobs.startDateYear} - {jobs.endDateMonth} {jobs.endDateYear}`</span>
            <p>{jobs.jobDescription}</p>
          </div>
        )});
      }): (
        <div></div>
      )}
    </section>
  );
};

export default JobList;
