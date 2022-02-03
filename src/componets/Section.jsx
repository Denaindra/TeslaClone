import SectionStyle from "../css/Section.module.css";
import homeObjOne from "../images/down-arrow.svg";
import Fade from "react-reveal/Fade";


function Section(props) {


  var secondButton = "";

  if (props.rightBtn != null) {
    secondButton = (
      <span className={SectionStyle.button + " " + SectionStyle.rightButton}>
        {props.rightBtn}
      </span>
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
      className={SectionStyle.background}
    >
      <Fade bottom>
        <div className={SectionStyle.titleGroup}>
          <h1>{props.title}</h1>
          <p className={SectionStyle.descriptiontTitle}>{props.description}</p>
        </div>
      </Fade>

      <Fade bottom>
        <section className={SectionStyle.bottomSection}>
          <section className={SectionStyle.buttonGroup}>
            <span className={SectionStyle.button}>{props.leftBtn}</span>
            {props.rightBtn && (
              <span
                className={SectionStyle.button + " " + SectionStyle.rightButton}
              >
                {props.rightBtn}
              </span>
            )}
          </section>
          <img
            src={homeObjOne}
            alt="scroll icon"
            className={SectionStyle.arrowButton}
          />
        </section>
      </Fade>
    </div>
  );
}

export default Section;
