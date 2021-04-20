import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask ,faPenAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './SkillListED.css';

function SkillListED(props){
    return(
        <section>
            <h2 className="category"><span className="fa-icon"><FontAwesomeIcon icon={faFlask}/></span> Skills</h2>
            {props.values.length ? (
                props.values.map(skills => { return (
                <div key={Math.random().toString(36).substr(2, 9)}>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="skillName">{skills.skill}</h4>
                        </div>
                        <div class="card-footer">
                            <button type="button" class="btn btn-secondary skill-btn"><FontAwesomeIcon icon={faPenAlt}/> Edit</button>
                            <button type="button" class="btn btn-secondary skill-btn" onClick={() => props.removeSkill(skills.id)}><FontAwesomeIcon icon={faTrashAlt}/> Delete</button>
                        </div>
                    </div>
                    <br />
                </div>
                )})
            ) :
            <div/>
            }   
        </section>
    )
}

export default SkillListED;