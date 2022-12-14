import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowClient from './components/ShowClient';
import  CreateClients  from './components/CreateClients';
import EditClients from './components/EditClients';
import Home from './components/Home';
import ShowEvent from './components/ShowEvent';
import CreateEvents from './components/CreateEvent';
import AsignarEvent from './components/Asignar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
      <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<ShowClient/>}/>
        <Route path='/create' element={<CreateClients/>}/>
        <Route path='/edit/:id' element={<EditClients/>}/>

        <Route path='/event' element={<ShowEvent/>}/>
        <Route path='/create-event' element={<CreateEvents/>}/>

        <Route path='/' element={<ShowClient/>}/>
        <Route path='/create-events' element={<CreateClients/>}/>
        <Route path='/asignar/:id' element={<AsignarEvent/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
