import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    </Routes>
      
    </div>
  );
}

export default App;
