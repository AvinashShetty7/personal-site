import React from "react";
import styles from "./AboutUs.module.css";
import { tech } from "../../data";
import WindowBox from "../WindowBox/WindowBox";
import { IconContext } from "react-icons";
import { TbBackground } from "react-icons/tb";

interface AboutUsProps {
  onClickClose: () => void;
  setActiveElement: (element: string) => void;
  zIndexVal: number;
  activeElement: string;
}

const AboutUs: React.FC<AboutUsProps> = ({
  onClickClose,
  setActiveElement,
  zIndexVal,
  activeElement,
}) => {
  return (
    <IconContext.Provider value={{ color: "#007AFF", size: "1rem" }}>
      <WindowBox
        onClickClose={onClickClose}
        setActive={() => setActiveElement("AboutUs")}
        zIndexVal={zIndexVal}
        offset={60}
        displayText="Technologies Learned"
        activeElement={activeElement === "AboutUs"}
        displayTextMobile={"About Me"}
      >
        <div className={styles.container}>
          <div className={styles.skilllist}>
            
            {tech.map((item, index) => (
              <div key={index} className={styles.profileImageWrapper}>
                <img
                  src={item.techImage}
                  alt={item.technologyName}
                  className={styles.profileImage}
                />
                <p className={styles.para}>{item.technologyName}</p>
              </div>
            ))}
          </div>
        </div>
      </WindowBox>
    </IconContext.Provider>
  );
};

export default AboutUs;
