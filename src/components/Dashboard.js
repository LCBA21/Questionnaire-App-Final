import React from 'react';


const Dashboard = ({ todoList,agreenum, disagreenum, neutralnum }) => {


 
  return (
    <div>

      <div className='div-stats-conatiner'>
        <div className='stats'>
        <div className='text-container-agree'>Agreements</div>
        <div className='text-size-count'>{agreenum}</div>
        <div></div>
        </div>

        <div className='stats'>
          <div className='text-container-disagree'>Disagreements</div>
          <div className='text-size-count'>{disagreenum}</div>
          <div></div>
          </div>

        <div className='stats-neutral'>
        <div className='text-container-neutral '>Neutral</div>
        <div className='text-size-neutral'> <p>{neutralnum}</p></div>
        <div></div>
          </div>

          <div className='stats-total'>
          <div className='text-container-total'>Total</div>
          <div className='text-size-total'>{todoList.length}</div>
          </div>

          {/* <div>
              <div></div>
              <div></div>
              <div></div>
          </div> */}

      </div>
    </div>
  );
};

export default Dashboard;
