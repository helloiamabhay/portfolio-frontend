// import { rootShouldForwardProp } from "@mui/material/styles/styled";
import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";
import { clearError, clearMessage } from "./redux/reducers/adminReducer";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  const { message, error, loading, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, message]);
  return (
    <div>
      <Router>
        {loading ? (
          <Loader />
        ) : (
          <>
            {/* <Header isAuthenticated={isAuthenticated} /> */}
            <Routes>
              <Route
                path="/"
                element={<Header isAuthenticated={isAuthenticated} />}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/resetpassword/:token" element={<ResetPassword />} />
              <Route path="*" element={<NotFound />} />

              {isAuthenticated ? (
                <Route path="/admin" element={<AdminDashboard />} />
              ) : (
                <Route path="/login" element={<Login />} />
              )}
            </Routes>

            <Footer />
            <Toaster />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
