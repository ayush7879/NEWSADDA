
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
const App =()=> {
 const apikey="6a4ba8b0ee7449a19a251bf838137da0"
  
 const pageSize=10;
 
 
    return (
      
      <Router>
     <div>
    <Navbar/>
    {/* <News   country="in" category="general"/> */}
    <Routes>
<Route exact path='/' element={<News key="general"   country="in" category="general" apikey={apikey} pageSize={pageSize}/>}></Route>
          <Route exact path="Home" element={     <News key="general"    country="in" category="general" apikey={apikey}  pageSize={pageSize} />}/>
          <Route exact path="business"  element={<News key="business"    country="in" category="business" apikey={apikey} pageSize={pageSize} /> }/>
          <Route exact path="entertainment" element={ <News key="entertainment"    country="in" category="entertainment" apikey={apikey}  pageSize={pageSize} /> }></Route>
          <Route exact path="general"element={ <News  key="general"  country="in" category="general" apikey={apikey} pageSize={pageSize} />}  >  </Route>
          <Route exact path="health"element={<News key="health"   country="in" category="health" apikey={apikey}  pageSize={pageSize} />}>   </Route>
          <Route exact path="science" element={ <News key="science"   country="in" category="science" apikey={apikey}  pageSize={pageSize}  /> }></Route>
          <Route exact path="sports" element={<News  key="sports"  country="in" category="sports" apikey={apikey}  pageSize={pageSize}  /> }> </Route>
          <Route exact path="technology"element={<News key="technology"   country="in" category="technology" apikey={apikey}  pageSize={pageSize}  />}>   </Route>
          </Routes>
     </div>
    </Router>
    )
  
}
export default App;
