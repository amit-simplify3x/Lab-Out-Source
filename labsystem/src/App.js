import React from "react";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';


import PriceList  from "./components/PriceList";
import BookTest from './components/BookTest';
import DownloadReport from './components/DownloadReport';
import Mylocation from './components/MyLocation';
import Queries from './components/Queries';
import GdShop from './components/GdShop';
import TrackSample from './components/TrackSample';
import Home from './components/Home';


import './styles/Home.css'
import './styles/PriceList.css'

function App() {
  return (
     
    <Router>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/PriceList" element={<PriceList/>} />
           <Route path="/DownloadReports" element={<DownloadReport/>} />
             <Route path="/mylocation" element={<Mylocation/>} />
               <Route path="/Queries" element={<Queries/>} />
                 <Route path="/Gdshop" element={<GdShop/>} />
                   <Route path="/BookTest" element={<BookTest/>} />
       </Routes>
    </Router>
    
  );
}

export default App;
