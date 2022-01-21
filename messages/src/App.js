import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Layout from './components/Layout';
import Home from "./components/Home";
import Filters from "./components/Filters";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>

            <Route index element={<Home/>}></Route>

            <Route path="/filters" element={<Filters />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
