import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Support from './pages/Support';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from './components/Head';

function App() {
  return (
    <>
      <Head />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/score' element={<Support />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
