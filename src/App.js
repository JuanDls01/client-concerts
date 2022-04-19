import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import RegisterForm from './components/registerForm/RegisterForm';
import RegisterSuccess from './components/registerForm/RegisterSuccess/RegisterSuccess';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import EventDetail from './components/EventDetail/EventDetail';
import ArtistForm from './components/registerArtist/RegisterArtist';
import EventForm from "./components/EventForm/EventForm";
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        {/* Invitado: */}
        <Route index element={<Home />} />
        <Route path="/register" exact element={<RegisterForm />} />
        <Route path="/register/success" element={<RegisterSuccess />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/:id" element={<EventDetail />} />
        {/* Vendedor: */}
        <Route path="/postartist"  element={<ArtistForm/>} />
        <Route path="/createEvent" element={<EventForm />} />
      </Routes>
    </div>
  );
}

export default App;
