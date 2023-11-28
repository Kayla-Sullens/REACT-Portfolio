import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About } from './pages/About';

const App = () => {
  return (
    <>
      {/* header */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* footer */}
    </>
  )
}



export default App;
