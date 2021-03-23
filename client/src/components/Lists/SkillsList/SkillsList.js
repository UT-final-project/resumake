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
              props.values.map(skill => { 
                let string = '';
                props.values.indexOf(skill) === props.values.length - 1 ? (
                  string = skill + '. '
                ) : (
                  string = skill + ', '
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
