import './App.css';
import Home from "./Pages/Home";
import Feeder from "./Pages/Feeder";
import NotFound from "./Pages/NotFound";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/Feeder" exact element={<Feeder/>}/>
              <Route element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
