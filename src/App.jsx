import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Home = lazy (()=>import("./Components/Home/Home"))
const Login = lazy(()=>import("./Components/Login/Login"))
const Registro = lazy(()=>import("./Components/Registro/Registro"))


function App() {

 

  return (
<>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/registro' element={<Registro />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Router>

</>
  );
}

export default App;
