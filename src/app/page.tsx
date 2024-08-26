import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";
import ExperienceSection from "@/components/experiences/ExperienceSection";
import { WORK_EXPERIENCES } from "@/constants/experiences";

function Lander() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-section main">
          <div className="hero-section main-text">
            <h1>Pongpich Singhagumpon</h1>
            <p>
              I am a passionate fullstack software engineer with a deep love for
              programming. With experience in web development, I thrive on
              bringing ideas to life from the ground up. Whether it's front-end
              interfaces or back-end architectures.
            </p>
          </div>

          <div className="hero-section contact">
            <ul>
              <li>
                <a target="_blank" href="https://github.com/popoiuioopp">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/pongpich-singhagumpon-6a05a7230/"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero-section image-container">
          <img src="images/profile_pic.jpg" alt="Profile Picture" />
        </div>
      </div>
      <ExperienceSection experiences={WORK_EXPERIENCES} />
    </>
  );
}

export default Lander;
