import "./App.css";
import { Login, SignUp, Profile } from "./features";
import { Routes, Route, Link } from "react-router-dom";
import { RequireAuth } from "./features/auth/RequireAuth";
import { PageLayout } from "./components/pagelayout/PageLayout";
import { Home } from "./features/home/home";
import { useSelector } from "react-redux";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth >
              <PageLayout>
                <Home />
              </PageLayout>
            </RequireAuth>
          } 
        ></Route>
        <Route
          path="/profile"
          element={
            <RequireAuth >
              <PageLayout>
                <Profile />
              </PageLayout>
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
