import React, { useState } from "react";
import FormComponent from "./FormComponent";
import ResultComponent from "./ResultComponent";

const App = () => {
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [akanName, setAkanName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const day = calculateDayOfWeek(dob);
    const name = getAkanName(gender, day);
    setAkanName(name);
};
return()
