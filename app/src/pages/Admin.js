import React,{useState} from 'react'
import Sidenavbar from '../components/Admin/Sidenavbar'
// import DoctorLogin from '../components/Doctor/DoctorLogin'
import DoctorSignup from '../components/Admin/DoctorSignup'
import DashBoard from '../components/Admin/DashBoard';
import Notification from '../components/Admin/Notification';
import AddMedicines from '../components/Admin/AddMedicines';
import AddSymptoms from '../components/Admin/AddSymptoms';
import AddDiagnosis from '../components/Admin/AddDiagnosis';


const Admin = () => {
     const [selectedOption, setSelectedOption] = useState(null);

     const handleOptionSelect = (option) => {
         setSelectedOption(option);
         console.log(option);
     };
  
  const componentMap = {
    "add-doctor": <DoctorSignup />,
    // dashboard: <Dashboard />,
    "medicines": <AddMedicines />,
    "symptoms": <AddSymptoms />,
    "diagnosis": <AddDiagnosis />,
    "notification": <Notification />,
    // "other-option-2": <OtherComponent2 />,
    default: <DashBoard />
  };

  return (
    <div className="flex flex-row bg-base-200 max-h-screen">
      <div className="h-screen">
        <Sidenavbar onOptionSelect={handleOptionSelect} />
      </div>
      <div className="w-9/12 mx-auto h-screen">
        {componentMap[selectedOption] || componentMap.default}
      </div>
    </div>
  );
}

export default Admin