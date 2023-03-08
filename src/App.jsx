import { lazy, Suspense } from "react";
import Loading from "./Components/Loading/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Top from "./Components/Top/Top";

const Home = lazy(() => import("./Components/Home/Home"));
const Nav = lazy(() => import("./Components/Nav/Nav"));
const Error = lazy(() => import("./Components/Error/Error"));
const Now = lazy (()=> import("./Components/Now/Now"))

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/now" element={<Now />}></Route>
            <Route path="/top" element={<Top />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
