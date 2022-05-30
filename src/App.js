import "./App.css";
import { Login, SignUp ,Profile } from "./features";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
         <Route path= "/profile" element = {<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
