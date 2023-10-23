import React from 'react';
import './resume.css';
import { Link } from 'react-scroll';

const Resume = () => {
  return (
    <div className='resume-main'>
      <div className='r-left'>
        <ul>
          <li>
            <Link to='education' smooth={true} duration={500} >
              education
            </Link>
          </li>
          <li>
            <Link to='projects' smooth={true} duration={500}>
              projects
            </Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={500} >
              work history
            </Link>
          </li>
          <li>
            <Link to='interest' smooth={true} duration={500} >
              interest
            </Link>
          </li>
        </ul>
      </div>
      <div className='r-right'>
        {/* Scrollable container */}
        <div className='scroll-container'>
          <div className='education' id='education'>
            education
          </div>
          <div className='projects' id='projectss'>
            project
          </div>
          <div className='workhistory' id='work'>
            work history
          </div>
          <div className='interest' id='interest'>
            interest
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
