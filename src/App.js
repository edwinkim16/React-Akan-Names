import React, { useState } from "react";

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
