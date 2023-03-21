import { lazy, Suspense } from "react";
import Loading from "./Components/Loading/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Top from "./Pages/Top/Top";
import Popular from "./Pages/Popular/Popular";
import Footer from "./Components/Footer/Footer";

const Home = lazy(() => import("./Pages/Home/Home"));
const Nav = lazy(() => import("./Components/Nav/Nav"));
const Error = lazy(() => import("./Pages/Error/Error"));
const Now = lazy (()=> import("./Pages/Now/Now"))

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/popular" element={<Popular />}></Route>
            <Route path="/now" element={<Now />}></Route>
            <Route path="/top" element={<Top />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </Suspense>
        <Footer />
      </Router>
    </>
  );
}

export default App;
