import "./styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Lander() {
  return (
    <div className="lander">
      <div className="lander-main-text">
        <h1>Pongpich Singhagumpon</h1>
        <p>
          I am a passionate fullstack software engineer with a deep love for
          programming. With experience in web development, I thrive on bringing
          ideas to life from the ground up. Whether it's front-end interfaces or
          back-end architectures.
        </p>
      </div>
      <div className="image-container">
        <img src="images/profile_pic.jpg" alt="Profile Picture" />
      </div>
    </div>
  );
}

export default Lander;
