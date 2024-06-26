import React, { useState } from "react";
import styles from "./FAQ.module.css";
import FAQImage from "../../../assets/images/faq-image.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={styles.faqWrapper}>
      <p className={styles.faq_category}>Get Your Answer</p>
      <p className={styles.faq_heading}>Frequently Asked Questions</p>
      <div className={styles.faqContainer}>
        <div className={styles.faqImage}>
          <img src={FAQImage} alt="picture_for_FAQ_section" />
        </div>
        <div className={styles.faq_accordion}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleAccordionChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<AddIcon style={{ backgroundColor: "#2AA7FF" }} />}
              aria-controls="panel1-content"
            >
              <Typography
                style={{ color: "#1B3C74", fontWeight: 600, fontSize: "18px" }}
              >
                Why choose our medical for your family?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  color: "#2AA7FF",
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Inter",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                dolorum harum quasi magni dolorem! Eos harum neque nostrum a!
                Voluptatibus nulla ducimus nobis repellendus numquam corrupti
                repellat, tempore ab porro?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleAccordionChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<AddIcon style={{ backgroundColor: "#2AA7FF" }} />}
              aria-controls="panel2-content"
            >
              <Typography
                style={{ color: "#1B3C74", fontWeight: 600, fontSize: "18px" }}
              >
                Why we are different from others?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  color: "#2AA7FF",
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Inter",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                dolorum harum quasi magni dolorem! Eos harum neque nostrum a!
                Voluptatibus nulla ducimus nobis repellendus numquam corrupti
                repellat, tempore ab porro?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleAccordionChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<AddIcon style={{ backgroundColor: "#2AA7FF" }} />}
              aria-controls="panel3-content"
            >
              <Typography
                style={{ color: "#1B3C74", fontWeight: 600, fontSize: "18px" }}
              >
                Trusted & experience senior care & love
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  color: "#2AA7FF",
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Inter",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                dolorum harum quasi magni dolorem! Eos harum neque nostrum a!
                Voluptatibus nulla ducimus nobis repellendus numquam corrupti
                repellat, tempore ab porro?
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleAccordionChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<AddIcon style={{ backgroundColor: "#2AA7FF" }} />}
              aria-controls="panel4-content"
            >
              <Typography
                style={{ color: "#1B3C74", fontWeight: 600, fontSize: "18px" }}
              >
                How to get appointment for emergency cases?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                style={{
                  color: "#2AA7FF",
                  fontWeight: 600,
                  fontSize: "16px",
                  fontFamily: "Inter",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                dolorum harum quasi magni dolorem! Eos harum neque nostrum a!
                Voluptatibus nulla ducimus nobis repellendus numquam corrupti
                repellat, tempore ab porro?
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
