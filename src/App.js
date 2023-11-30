import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavTabs from './components/Navigation';
// import { About } from './pages/About';
import Portfolio from './pages/Portfolio';
// import { Contact } from './pages/Contact';
// import { Resume } from './pages/Resume';

const App = () => {
  return (

    <> 
    <NavTabs />
    <Portfolio />

  </>
    // <>
    //   {/* header */}
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path='/' element={<About />} />
    //       <Route path='/Portfolio' element={<Portfolio />} />
    //       <Route path='/Contact' element={<Contact />} />
    //       <Route path='/Resume' element={<Resume />} />
    //     </Routes>
    //   </BrowserRouter>
    //   {/* footer */}
    // </>

  )
}



export default App;
