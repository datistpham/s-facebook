import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./component/Index";
// import Main from "./component/Main";
import Main2 from "./component/Main2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/help/contact/1032538800469748"} element={<Main2 />} />
      </Routes>
    </Router>
  );
};

export default App;
