import { useState } from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Welcome from './components/Welcome';
import Home from './pages/Home';

export default function App() {

  const [welcomed, setWelcomed] = useState<boolean>(false);

  window.setTimeout(() => {
    setWelcomed(true)
  }, 3500)

  return (
    <>
      {!welcomed ? <Welcome /> : <></>}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
