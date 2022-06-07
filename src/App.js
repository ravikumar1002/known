import "./App.css";
import { Login, SignUp, Profile, Explore, Bookmarks } from "./features";
import { Routes, Route, Link } from "react-router-dom";
import { RequireAuth } from "./features/auth/RequireAuth";
import { PageLayout } from "./components";
import { Home } from "./features/home/home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPostsThunk } from "./thunk";

function App() {
  const { authToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsThunk());
  }, [authToken]);

  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <PageLayout>
                <Home />
              </PageLayout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/bookmarks"
          element={
            <RequireAuth>
              <PageLayout>
                <Bookmarks />
              </PageLayout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/explore"
          element={
            <RequireAuth>
              <PageLayout>
                <Explore />
              </PageLayout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/profile/:username"
          element={
            <RequireAuth>
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
