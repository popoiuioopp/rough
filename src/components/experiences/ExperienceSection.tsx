// ExperienceSection.tsx
import styles from "./ExperienceSection.module.scss";
import ExperienceItem, { ExperienceItemProps } from "./ExperienceItem";

export interface ExperienceSectionProps {
  experiences: ExperienceItemProps[];
}

function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <div className={styles.experience}>
      <h2>Experiences</h2>
      <ul>
        {experiences.map((exp, i) => (
          <li key={i.toString()}>
            <ExperienceItem {...exp} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceSection;
