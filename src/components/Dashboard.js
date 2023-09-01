import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';



const Dashboard = ({ todoList,agreenum, disagreenum, neutralnum }) => {


  let agree=agreenum;
  let disagree=disagreenum;
  let neutral=neutralnum;
  let total=todoList.length;

  const moduleData = [

    { module: 'Agree', percentage: agree, color: '#8884d8' },
    { module: 'Disagree', percentage: disagree, color: '#82ca9d' },
    { module: 'Neutral', percentage: neutral, color: '#ffc658' },
    { module: 'Total', percentage: total, color: '#d62728' },

  ];
  

 
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
          <div className='stats-graph'>
          <div className='control-graph' style={{ width: '358px', height: 144 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={moduleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="module" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="percentage" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
