import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Components/Auth/SignUp";
import Todo from "./Components/Todo/Todo";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<SignUp />} /> */}
          <Route path="/" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
