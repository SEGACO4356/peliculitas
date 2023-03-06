import { lazy, Suspense } from "react";
import Loading from "./Components/Loading/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./Components/Home/Home"));
const Login = lazy(() => import("./Components/Login/Login"));
const Registro = lazy(() => import("./Components/Registro/Registro"));
const Nav = lazy(() => import("./Components/Nav/Nav"));
const Error = lazy(() => import("./Components/Error/Error"));

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/registro" element={<Registro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
