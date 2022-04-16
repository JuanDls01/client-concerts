<<<<<<< HEAD
import './App.css';
//import { Route, Routes } from 'react-router-dom';
//import SearchBars from './components/SearchBars/SearchBars.jsx'

function App() {
  return (
    <div>
      
    </div>
=======
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import NoMatch from './components/NoMatch/NoMatch'
import RegisterForm from './components/registerForm/RegisterForm'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
          <Route index  element={<Home/>}/>
          <Route path="/register"  element={<RegisterForm/>} />
          <Route path="/login"  element={<Login/>} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="*" element={<NoMatch/>} />
    </Routes>
    
  </div>
>>>>>>> dev
  );
}

export default App;
