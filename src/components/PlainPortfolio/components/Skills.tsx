import React from "react";
import type { Tech } from "../../../data";
import styles from "../PlainPortfolio.module.css";

interface TechSectionProps {
  tech: Tech[];
}

const TechSection: React.FC<TechSectionProps> = ({
  tech,
}) => {
  return (
    <div className={styles.section}>
    <h2>Skills</h2>

    <div className={styles.techContainer}>
      {tech.map((exp, index) => (
        <div key={index} className={styles.techItem}>
          <img
            src={exp.techImage}
            alt="Imageofskill"
            className={styles.techImage}
          />
          <p>
            <strong>{exp.technologyName}</strong>
          </p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default TechSection;
