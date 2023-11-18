import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './component/Header'
import Contents from './component/Contents'
import Nwf from './main/Nwf'
import Footer from './component/Footer'
import db from './db/data.json'
import cb from './db/mapping.json'




function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header dbnav={db.nav} dbnr={db.nr} dbm={db.men} dbwm={db.women} dbk={db.kids} dbs={db.sale} ms={db.menus}></Header>
    <Routes>
      <Route path="/" element={<div><Contents dbd1={db.d1} dbd2={db.d2} dbd3={db.d3} /></div>}></Route>
      <Route path="/nwf" element={<Nwf data={cb.db}/>} />
    </Routes>
    <Footer dbf={db.footer} dbq={cb.db} dbs={db.fsns} dbm={db.fmenus} dbi={db.finfo} dbn={db.fnotice}/>
    </BrowserRouter>
  );
}

export default App;
