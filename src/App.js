import { Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home'
import NoMatch from './components/NoMatch/NoMatch'
import RegisterForm from './components/registerForm/RegisterForm'

import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
          <Route index  element={<Home/>}/>
          <Route path="/register"  element={<RegisterForm/>} />
          <Route path="*" element={<NoMatch/>} />
    </Routes>
    
  </div>
  );
}

export default App;
