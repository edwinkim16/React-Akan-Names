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
