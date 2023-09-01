import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Slider from './components/Slider';
import Questionnaire from './components/Questionnaire';
import Dashboard from './components/Dashboard';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [selected,setSelected]=useState({})
  const [agreenum, setAgreeNum] = useState(0);
  const [disagreenum, setDisagreeNum] = useState(0);
  const [neutralnum, setNeutralNum] = useState(0);

  return (
    <div className="App">
      <Router>
        <Slider />
        <Routes>
          <Route
            path='/'
            element={
              <Dashboard
              todoList={todoList}
                agreenum={agreenum}
                disagreenum={disagreenum}
                neutralnum={neutralnum}
              />
            }
          />

          <Route
            path='/create'
            element={<Create 
               todoList={todoList}
               setTodoList={setTodoList} 
               />}
          />

          <Route
            path='/question'
            element={
              <Questionnaire
              todoList={todoList}
              setAgreeNum={setAgreeNum}
              setDisagreeNum={setDisagreeNum}
              setNeutralNum={setNeutralNum}
              selected={selected}
              setSelected={setSelected} 

              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
