import { Route, Routes } from 'react-router-dom';
import HomePage from './views/HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={  <HomePage />}/>
        <Route path='/home' element={  <HomePage />}/>
      </Routes>
    </div>
  );
}

export default App;
