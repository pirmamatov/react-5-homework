import Countries from "./components/Countries";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import SingleCountry from "./components/SingleCountry";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />}></Route>
          <Route path="/:name" element={<SingleCountry/>}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
