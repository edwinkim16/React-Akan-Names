// FormComponent.js
import React from "react";

const FormComponent = ({ dob, setDob, gender, setGender, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date of Birth: </label>
        <input 
          type="date" 
          value={dob} 
          onChange={(e) => setDob(e.target.value)} 
        />
      </div>

      <div>
        <label>Gender: </label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button type="submit">Get Akan Name</button>
    </form>
  );
};

export default FormComponent;
