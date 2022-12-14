import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowClient from './components/ShowClient';
import  CreateClients  from './components/CreateClients';
import EditClients from './components/EditClients';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowClient/>}/>
        <Route path='/create' element={<CreateClients/>}/>
        <Route path='/edit/:id' element={<EditClients/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
