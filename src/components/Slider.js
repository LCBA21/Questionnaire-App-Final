import React from 'react';
import { Link } from 'react-router-dom';
import {FaPlusSquare} from 'react-icons/fa'
import {FaClipboard} from 'react-icons/fa'
import {FaQuestionCircle} from 'react-icons/fa'
import logo from '../components/OfficialLogo2.png'




const Slider = () => {
  return (
    <div>


      <div className='slider-container'>
      <img className='resize-logo' src={logo} alt='logo'/>

          <div className='text-dashboard-container'>
          <Link to={`/`}>
          <div>
          <FaClipboard className='icons-slider'/>
          </div>

          <div>
          <p className='btn-slider'>Dashboard</p>
          </div>
        </Link>
          </div>
         
      
        <div className='text-questionnaire-container'>
        <Link to={`/question`}>
          <div>
          <FaQuestionCircle className='icons-slider'/>
          </div>

          <div>
          <p className='btn-slider'>Questionnaire</p>
          </div>
        </Link>
        </div>
     
          <div className='text-create-container'>
          <Link to={'/create'}>
          <div>
          <FaPlusSquare className='icons-slider'/>
          </div>

          <div>
          <p className='btn-slider'>Create</p>
          </div>
        </Link>
          </div>
      


      </div>
    </div>
  );
}

export default Slider;