import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import SiteAdmin from "./Site_Admin/SiteAdmin/SiteAdmin";
import "./styles.css";


export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Link to='/site-admin'>
      Go to Site Admin
      </Link>
        <Routes>
          <Route path='/site-admin' element={<SiteAdmin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
