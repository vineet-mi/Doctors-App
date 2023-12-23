import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import DoctorSignup from "./components/Admin/DoctorSignup";
// import PatientSignup from "./components/Patient/PatientSignup";
// import ReceptionistSignup from "./components/Recptionist/ReceptionistSignup";
// import PatientLogin from "./components/Patient/PatientLogin";
// import ReceptionistLogin from "./components/Recptionist/ReceptionistLogin";
// import DoctorLogin from "./components/Doctor/DoctorLogin";
// import PatientPage from "./pages/PatientPage";
import DoctorDash from "./pages/DoctorDash";
import PrescriptionPage from "./pages/PrescriptionPage";
import GeneratePrescription from "./components/Doctor/GeneratePrescription";
import ManageRecep from "./components/Doctor/ManageRecep";
import { useAuthContext } from "./hooks/useAuthContext";
import AdminLogin from "./components/Admin/AdminLogin";
import PageNotFound from "./pages/PageNotFound";
import ReceptionDash from "./pages/ReceptionDash";
import ReceptionistLogin from "./pages/ReceptionistLogin";
import MedicinePage from "./components/Doctor/MedicinePage";
import SymtomPage from "./components/Doctor/SymtomPage";

function App() {
  const { user, userType } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/medicin" element={<MedicinePage />} />
          <Route path="/symptom" element={<SymtomPage />} />
          <Route path="/presce" element={<GeneratePrescription />} />
          {user && userType === "admin" && (
            <Route path="/admin-dashboard" element={<Admin />} />
          )}
          {user && userType === "doctor" ? (
            <>
              <Route path="/doctor-dash" element={<DoctorDash />} />
              <Route path="/prescription-page" element={<PrescriptionPage />} />
              <Route path="/manage-recep" element={<ManageRecep />} />
            </>
          ) : (
            <>
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/login" element={<Login />} />
            </>
          )}

          {user && userType === "reception" ? (
            <>
              <Route path="/reception-dash" element={<ReceptionDash />} />
            </>
          ) : (
            <>
              <Route path="/*" element={<PageNotFound />} />
              <Route path="/reception-login" element={<ReceptionistLogin />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </>
          )}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
