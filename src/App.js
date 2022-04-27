import './App.css';
import List from './js/components/List.jsx';
import Layout from './js/components/Layout.jsx';
import People from './js/components/People.jsx';
import Planets from './js/components/Planets.jsx';
import Vehicles from './js/components/Vehicles.jsx';
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path='list' element={<List />} />
          <Route path="people" element={<People />} />
          <Route path="planets" element={<Planets />} />
          <Route path="vehicles" element={<Vehicles />} />
          


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
         
        </Route>
      </Routes>
     
      
    </div>
  );
}

export default App;
