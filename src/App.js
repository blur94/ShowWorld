import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SiteAdmin from "./Site_Admin/SiteAdmin/SiteAdmin";
import "./styles.css";


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/site-admin' element={<SiteAdmin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
