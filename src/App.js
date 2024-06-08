import { BrowserRouter, Routes, Route } from "react-router-dom";
import Salaire from "./Components/Salaire";
import Home from "./Components/Home";
import Composant3 from "./Components/Composant3";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const url =  "https://back-end-salaire-3.onrender.com"
  const [data, setData] = useState([]);

  useEffect  ( async() => { 
    axios
      .get(`${url}/salaries`)
      .then(  (response) => {await
      setData(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching Data:", error);
      });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
            <Route path="salaire" element={<Salaire data={data} />} />
            <Route path="search" element={<Composant3 data={data} />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
