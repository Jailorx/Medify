import Button from "../../Button/Button";
import Card from "../Card/Card";
import searchIcon from "../../../assets/icon/search-icon.svg";
import styles from "./SearchForm.module.css";
import doctorIcon from "../../../assets/icon/doctor-icon.svg";
import ambulanceIcon from "../../../assets/icon/ambulance-icon.svg";
import labsIcon from "../../../assets/icon/labs-icon.svg";
import hospitalIcon from "../../../assets/icon/hospital-icon.svg";
import medicineIcon from "../../../assets/icon/medicine-icon.svg";

import { useState, useEffect } from "react";

const SearchForm = () => {
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
    const responseSearch =
      await fetch(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}
    `);
    const dataSearch = await responseSearch.json();
    console.log(dataSearch);
  };

  return (
    <div className={styles.searchFormContainer}>
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

      <div className={styles.selectedInfo}>
        {selectedState && <p>Selected State: {selectedState}</p>}
        {selectedCity && <p>Selected City: {selectedCity}</p>}
      </div>

      <div className={styles.content}>You may be looking for</div>
      <div className={styles.cards}>
        <Card
          bgcolor="rgba(250, 251, 254, 1)"
          icon={doctorIcon}
          title="Doctors"
        />
        <Card bgcolor="rgba(250, 251, 254, 1)" icon={labsIcon} title="Labs" />
        <Card
          bgcolor="rgba(250, 251, 254, 1)"
          icon={hospitalIcon}
          title="Hospitals"
        />
        <Card
          bgcolor="rgba(250, 251, 254, 1)"
          icon={medicineIcon}
          title="Medicine store"
        />
        <Card
          bgcolor="rgba(250, 251, 254, 1)"
          icon={ambulanceIcon}
          title="Ambulance"
        />
      </div>
    </div>
  );
};

export default SearchForm;
