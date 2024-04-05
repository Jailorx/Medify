import React, { useState, useEffect } from "react";
import Button from "../../Button/Button";
import { useHospitalContext } from "../../../contexts/HospitalContext";
import styles from "./SearchPanel.module.css";
import searchIcon from "../../../assets/icon/search-icon.svg";

const SearchPanel = () => {
  const { hospitals, setHospitals } = useHospitalContext();
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const getStates = async () => {
      const responseState = await fetch(
        `https://meddata-backend.onrender.com/states`
      );
      const dataState = await responseState.json();
      setStates(dataState);
    };

    getStates();
  }, []);

  useEffect(() => {
    const getCitiesOfState = async () => {
      const responseCity = await fetch(
        `https://meddata-backend.onrender.com/cities/${selectedState}`
      );
      const dataCity = await responseCity.json();
      setCities(dataCity);
    };

    if (selectedState !== "") {
      getCitiesOfState();
    }
  }, [selectedState]);

  const handleSelectState = (e) => {
    setSelectedState(e.target.value);
  };

  const handleSelectCity = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSearch = async () => {
    if (selectedState && selectedCity) {
      const responseSearch =
        await fetch(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}
    `);
      const dataSearch = await responseSearch.json();
      console.log(dataSearch);
      setHospitals(dataSearch);
      console.log("Hospitals:", hospitals);
    }
  };
  return (
    <div className={styles.searchPanelContainer}>
      <div className={styles.searchPanel}>
        <div className={styles.inputFieldContainer}>
          <img src={searchIcon} alt="search_icon" />
          {states.length > 0 ? (
            <select onChange={handleSelectState} value={selectedState}>
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          ) : (
            <select>
              <option value="">Select City</option>
            </select>
          )}
        </div>
        <div className={styles.inputFieldContainer}>
          <img src={searchIcon} alt="search_icon" />
          {cities.length > 0 ? (
            <select onChange={handleSelectCity} value={selectedCity}>
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          ) : (
            <select>
              <option value="">Select City</option>
            </select>
          )}
        </div>
        <Button text="Search" onClick={handleSearch} />
      </div>
    </div>
  );
};

export default SearchPanel;
