import React, { useState } from "react";
import FormComponent from "./FormComponent";
import ResultComponent from "./ResultComponent";

const akanNames = {
  male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"],
  female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
};

const calculateDayOfWeek = (dob) => {
  const date = new Date(dob);
  return date.getDay();  // Returns day of the week (0 = Sunday, 6 = Saturday)
};

const getAkanName = (gender, day) => {
  return akanNames[gender][day];
};

const App = () => {
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [akanName, setAkanName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dob || !gender) {
      alert("Please select both date of birth and gender!");
      return;
    }

    const day = calculateDayOfWeek(dob);
    const name = getAkanName(gender, day);
    setAkanName(name);
  }
  return (
    <div>
      <h1>Akan Name Generator</h1>
      <FormComponent 
        dob={dob} 
        setDob={setDob} 
        gender={gender} 
        setGender={setGender} 
        handleSubmit={handleSubmit} 
      />
      <ResultComponent akanName={akanName} />
    </div>
  );
};
export default App;