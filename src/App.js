import { Avatar } from '@material-ui/core';
import './App.css';
import Calender from './Calender';
import Sidebar from './Sidebar';
import Timeline from './Timeline';

function App() {
  return (
    <div className="app">
      <div className='app-left'>
        <Sidebar />
      </div>
      <div className='app-right'>
        <div className='top'>
          <div className='title'>
            <p>Frank's planner</p>
          </div>
          <div className='user'>
            <p>Frank Guerrero</p>
            <Avatar src='http://placeimg.com/80/80/person' />
          </div>
        </div>
        <div className='bottom'>
          <Calender />
          <Timeline />
        </div>
      </div>    
    </div>
  );
}

export default App;
