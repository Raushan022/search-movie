import "./App.css";
import Home from "./components/Home";
import SingleMovie from "./components/SingleMovie";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={"/movie/:id"} element={<SingleMovie />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
