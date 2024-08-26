import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./ExperienceItem.module.scss";

export interface ExperienceItemProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

function ExperienceItem({
  title,
  company,
  duration,
  description,
}: ExperienceItemProps) {
  return (
    <div className="experience-item">
      <h3>{company}</h3>
      <h4>{title}</h4>
      <p>{duration}</p>
      <p>{description}</p>
    </div>
  );
}

export default ExperienceItem;
