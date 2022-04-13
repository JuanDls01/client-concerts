import './App.css';
import { Route, Routes } from 'react-router-dom';

import EventDetail from './components/EventDetail/EventDetail';
import Home from './components/Home/Home'


function App() {
  return (
    <div className="App">
      {/* <Switch> */}
        {/* <Route path='/home'> */}
          <Home />
        {/* </Route> */}
        {/* <Route path='/eventdetail'> */}
          <EventDetail />
        {/* </Route>  */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
