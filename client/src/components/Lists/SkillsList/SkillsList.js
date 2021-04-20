import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import './SkillsList.css'

function SkillsList(props){
  return (
    <section>
      <h2 className="category"><span className="fa-icon"><FontAwesomeIcon icon={faFlask}/></span> Skills</h2>
      <div className="card">
        <div className="card-body">
          <p id="skills">
            {props.values.length ? (
              props.values.map(skills => { 
                let string = '';
                props.values.indexOf(skills) === props.values.length - 1 ? (
                  string = skills.skill + '. '
                ) : (
                  string = skills.skill + ', '
                )
                return (
                  string
              );})
            ): (
              <span/>
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsList;
