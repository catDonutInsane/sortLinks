
import './App.css';
import { Login } from './components/pages/login';
import { Main } from './components/pages/main';
import { Register } from './components/pages/register';
import { Routes,Route } from 'react-router-dom';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
