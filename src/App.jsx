// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HomeVisaServices from "./assets/pages/HomeVisaServices";
import HeaderPages from "./assets/pages/HeaderPages";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <HeaderPages />
      <HomeVisaServices />
    </BrowserRouter>
  );
}

export default App;
