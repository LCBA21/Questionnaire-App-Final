import React, { useState, useEffect } from "react";

const Questionnaire = ({ todoList,setAgreeNum,setDisagreeNum,setNeutralNum,selected,setSelected, }) => {
  const [radioValues, setRadioValues] = useState({});
  const [submitted, setSubmitted] = useState(false);





  //radio buttons event start
  const handleRadioChange = (index, value) => {
    setRadioValues(prevValues => ({
      ...prevValues,
      [index]: value,
    }));

    setSelected(value); 

    if (value === 'agree') {
      setAgreeNum(prevCount => prevCount + 1);
    } else if (value === 'disagree') {
      setDisagreeNum(prevCount => prevCount + 1);
    } else if (value === 'neutral') {
      setNeutralNum(prevCount => prevCount + 1);
    }
  };
    //radio buttons event end

  

    const handleSubmit = () => {
      const radioWithQuestions = todoList.map((task, index) => ({
        question: task,
        value: radioValues[index] || null,
      }));
  
      localStorage.setItem('questionnaireResponses', JSON.stringify(radioWithQuestions));
      setSubmitted(true);
    };
  

  return (
    <div className='div-center'>
      <div className='div-container'>
        <p className='text-header-question'>Questionnaire</p>

        <div className=''>
          {todoList.map((task, index) => (
            <div className='List' key={index}>
              {task}

              <div className='radio-inline'>
              <label>
                <input
                  type='radio'
                  name={`optradio-${index}`}
                  checked={radioValues[index] === 'agree'}
                  onChange={() => handleRadioChange(index, 'agree')}
                />
                Agree 
                
              </label>

              <label>
                <input
                  type='radio'
                  name={`optradio-${index}`}
                  checked={radioValues[index] === 'neutral'}
                  onChange={() => handleRadioChange(index, 'neutral')}
                />
                Neutral 
                                

              </label>

              <label>
                <input
                  type='radio'
                  name={`optradio-${index}`}
                  checked={radioValues[index] === 'disagree'}
                  onChange={() => handleRadioChange(index, 'disagree')}
                />
                Disagree 
                
              </label>
          </div>

            </div>
          ))}
        </div>

        <button className='btn-submit' onClick={handleSubmit}>
          Submit
        </button>

      </div>
    </div>
  );
};

export default Questionnaire;
