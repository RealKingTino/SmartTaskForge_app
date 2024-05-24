import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BoardContext } from './context/BoardContext';
import { useState } from 'react';

function App() {

  const boardData = {
    active:0,
    boards:[
    {
      name: 'My Smart Board',
      bgcolor: '#069000',
      list:[
        {id: "1", title: "To do", items:[{id: "cdrFt", title: "Project Descrption"}]},
        {id: "2", title: "In Progress", items:[{id: "cdrFv", title: "Project Descrption"}]},
        {id: "3", title: "Review", items:[{id: "cdrFb", title: "Project Descrption"}]},
        {id: "4", title: "Done", items:[{id: "cdrFc", title: "Project Descrption"}]}
      ]
    }
    ]
  }

  const [allBoards, setAllBoards] = useState(boardData);
  return (
    <>
      <Header></Header>
      <BoardContext.Provider value={(allBoards, setAllBoards)}>
      <div className='content flex'>
        <Sidebar> </Sidebar>
        <Main> </Main>
      </div>
      </BoardContext.Provider>
    </>
  )
}

export default App;
