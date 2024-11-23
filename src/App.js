import "./Header.css"; 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./data/routes.json";
import PrivateRoute from "./components/PrivateRoute";
import CourseDetails from "./pages/CourseDetails";
import Home from "./pages/Home";
const componentsMap = {
  CourseDetails: CourseDetails,
  Home: Home,
  // Contact: Contact,
};
const App = () => {
  
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const Component = componentsMap[route.element] || (() => null);
            console.log(route);
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.requiresAuth ? (
                    <PrivateRoute>
                      <Component />
                    </PrivateRoute>
                  ) : (
                    <Component />
                  )
                }
              />
            );
          })}
        </Routes>
      </Router>
     
    </>
  );
};

export default App;
