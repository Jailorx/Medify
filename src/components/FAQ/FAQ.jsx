import styles from "./FAQ.module.css";
import FAQImage from "../../assets/images/faq-image.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

const FAQ = () => {
  return (
    <div className={styles.faqWrapper}>
      <p className={styles.faq_category}>Get Your Answer</p>
      <p className={styles.faq_heading}>Frequently Asked Questions</p>
      <div className={styles.faqContainer}>
        <div className={styles.faqImage}>
          <img src={FAQImage} alt="picture_for_FAQ_section" />
        </div>
        <div className={styles.faq_accordion}>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon style={{ backgroundColor: "#2AA7FF" }} />}
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
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon style={{ backgroundColor: "#2AA7FF" }} />}
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
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon style={{ backgroundColor: "#2AA7FF" }} />}
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
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon style={{ backgroundColor: "#2AA7FF" }} />}
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
