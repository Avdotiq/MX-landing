import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Support from './pages/Support';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from './components/Head';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <>
      <Head />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/score' element={<Support />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/cookie-policy' element={<CookiePolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
