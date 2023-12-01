import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavTabs from './components/Navigation/Navigation';
import { About } from './pages/About';
import Portfolio from './pages/Portfolio';
// import { Contact } from './pages/Contact';
// import { Resume } from './pages/Resume';

const App = () => {
  return (

    <>
      
      <BrowserRouter>
      <NavTabs />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          {/* <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} /> */}
        </Routes>
      </BrowserRouter>
      {/* footer */}
    </>

  )
}



export default App;
