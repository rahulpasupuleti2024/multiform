import React, { useState } from "react";

import "./Styles.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [designation, setDesignation] = useState("");
  const [company, setCompany] = useState("");
  const [companyLocation, setCompanyLocation] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (step === 1) {
      if (!userName.trim()) {
        errors.userName = "User name is required";
      }

      if (!firstName.trim()) {
        errors.firstName = "First name is required";
      }
      if (!lastName.trim()) {
        errors.lastName = "Last name is required";
      }
    } else if (step === 2) {
      if (!designation.trim()) {
        errors.designation = "Designation is required";
      }
      if (!company.trim()) {
        errors.company = "Company name is required";
      }
      if (!companyLocation.trim()) {
        errors.companyLocation = "Company Location is required";
      }
    } else if (step === 3) {
      if (!city.trim()) {
        errors.city = "City is required";
      }
      if (!country.trim()) {
        errors.country = "Country is required";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      alert("submitted successfully");
    }
  };

  return (
    <div className="container">
      <div className="progressbar">
        <div
          style={{
            width: step === 1 ? "33.3%" : step === 2 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      {step === 1 && (
        <div>
          <form onSubmit={handleNext}>
            <h1>User Details</h1>

            <label>User Name:</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <div className="error">{errors.userName}</div>
            <label>First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <div className="error">{errors.firstName}</div>

            <label>Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <div className="error">{errors.lastName}</div>

            <button onClick={handleNext}>Next</button>
          </form>
        </div>
      )}

      {step === 2 && (
        <div>
          <form onSubmit={handleNext}>
            <h1>Work Details</h1>

            <label>Current Designation:</label>
            <input
              type="text"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            />
            <div className="error">{errors.designation}</div>

            <label>Current Company:</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <div className="error">{errors.company}</div>
            <label> Company Location:</label>
            <input
              type="text"
              value={companyLocation}
              onChange={(e) => setCompanyLocation(e.target.value)}
              required
            />
            <div className="error">{errors.companyLocation}</div>

            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
            <button onClick={handleNext}>Next</button>
          </form>
        </div>
      )}

      {step === 3 && (
        <div>
          <form onSubmit={handleSubmit}>
            <h1>Residental Details</h1>
            <label>City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
            <div className="error">{errors.city}</div>

            <label>Country:</label>
            <input
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            <div className="error">{errors.country}</div>

            <button type="button" onClick={handlePrevious}>
              Previous
            </button>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
