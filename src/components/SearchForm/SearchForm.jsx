import Button from "../Button/Button";
import Card from "../Card/Card";
import InputField from "../InputField/InputField";
import styles from "./SearchForm.module.css";
import doctorIcon from "../../assets/icon/doctor-icon.svg";
import ambulanceIcon from "../../assets/icon/ambulance-icon.svg";
import labsIcon from "../../assets/icon/labs-icon.svg";
import hospitalIcon from "../../assets/icon/hospital-icon.svg";
import medicineIcon from "../../assets/icon/medicine-icon.svg";

const SearchForm = () => {
  return (
    <div className={styles.searchFormContainer}>
      <div className={styles.searchPanel}>
        <InputField placeholder="State" />
        <InputField placeholder="City" />
        <Button text="Search" />
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
