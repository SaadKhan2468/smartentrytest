
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import AOS from "aos";
import "aos/dist/aos.css";
import Home from './components/pages/Home';
import DashboardPage from './components/pages/DashboardPage';
import NewsAndUpdatePage from './components/pages/NewsAndUpdatePage';
import HelpPage from './components/pages/HelpPage';
import TestsPage from './components/pages/TestsPage';
import ProfilePage from './components/pages/ProfilePage';
import NewsPageMain from './components/pages/NewsPageMain';
import HelpPageMain from './components/pages/HelpPageMain';
import ServicesPage from './components/pages/ServicesPage';
import ViewInstructionPage from './components/pages/ViewInstructionPage';
import PracticeTest from './components/pages/PracticeTest';
import ChatBox from './components/pages/ChatBox';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import ContactUs from './components/pages/ContactUs';
import SettingsPage from './components/pages/SettingsPage'; // Import SettingsPage


function App() {
  const [isAOSActive, setIsAOSActive] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsAOSActive(false);
      } else {
        setIsAOSActive(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isAOSActive) {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
      });
    }
  }, [isAOSActive]);

  return (
    <>
      <Routes>
        {/* <Route exact path="/" element={<Website />} /> */}
        {/* <Route exact path="otp" element={<Otp />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/newspage" element={<NewsAndUpdatePage />} />
        <Route exact path="/helppage" element={<HelpPage />} />
        <Route exact path="/testpage" element={<TestsPage />} />
        <Route exact path="/profilepage" element={<ProfilePage />} />
        <Route exact path="/newspagemain" element={<NewsPageMain />} />
        <Route exact path="/helppagemain" element={<HelpPageMain />} />
        <Route exact path="/servicepage" element={<ServicesPage />} />
        <Route exact path="/viewinstructionpage" element={<ViewInstructionPage />} />
        <Route exact path="/practicetest" element={<PracticeTest />} />
        <Route exact path="/chatpage" element={<ChatBox />} />
        <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/settings" element={<SettingsPage />} /> {/* Add Settings Route */}





      </Routes>
    </>
  );
}

export default App;
