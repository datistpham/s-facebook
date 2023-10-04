import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./component/Index";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Index />} />
      </Routes>
    </Router>
  );
};

export default App;
