import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IndexPage from "./pages";
import LogInPage from "./pages/LogIn";
import Onboarding from "./pages/Onboarding";
// import SignUpPage from "./pages/SignUp";
// import DoctorsPage from "./pages/Dashboard/Doctors";
// import StartPage from "./pages/Dashboard/Start";
// import AppointmentPage from "./pages/Dashboard/Appointments";
// import ProfilePage from "./pages/Dashboard/Profile";
// import PrescriptionListPage from "./pages/Dashboard/PrescriptionList";
// import NotificationPage from "./pages/Dashboard/Notifications";
// import LabTestPage from "./pages/Dashboard/LabTest";
// import BookAppointmentPage from "./pages/Dashboard/BookAppointment";
// import SupportPage from "./pages/Dashboard/Chat";
// import HealthBlogList from "./pages/Dashboard/HealthBlogList";
// import HealthBlog from "./pages/Dashboard/HealthBlog";
import MediaQuery from 'react-responsive'

function App() {
  return (
    <>
      <MediaQuery minWidth={480}>
      <img src="./images/downloadAppimage.jpg" alt="Download app image" width={"100%"} height={"auto"}></img>  
      </MediaQuery>
      <MediaQuery maxWidth={480} >
          <Router>
            <Routes>
              <Route exact path="/" element={<IndexPage />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/login" element={<LogInPage />} />
              {  /* <Route path="/signup" element={<SignUpPage />} />
              <Route path="/start" element={<StartPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              <Route path="/chat" element={<SupportPage />} />
              <Route path="/appointments" element={<AppointmentPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/prescriptions" element={<PrescriptionListPage />} />
              <Route path="/healthbloglist" element={<HealthBlogList />} />
              <Route path="/healthblog" element={<HealthBlog />} />
              <Route path="/notifications" element={<NotificationPage />} />
              <Route path="/tests" element={<LabTestPage />} />
              <Route path="/book/appointment" element={<BookAppointmentPage />} /> */}
            </Routes>
          </Router>
      </MediaQuery>
    </>
  );
}

export default App;
