import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf';

import { useTheme } from '../../common/ThemeContext.jsx';

function Hero() {
  const {theme,  toggleTheme } = useTheme();  

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterDark : twitterLight;
  const githubIcon = theme === 'light' ? githubDark : githubLight;
  const linkedinIcon = theme === 'light' ? linkedinDark : linkedinLight;
  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt='Profile picture of Rakshith'/>
        <img 
            className={styles.colorMode} 
            src={themeIcon} 
            alt="Color mode icon"
            onClick={toggleTheme} 
        />
      </div>
      <div className={styles.info}>
        <h1>Rakshith<br/>Nalgonda</h1>
        <h2>ML engineer</h2>
        <span>
          <a href='https://twitter.com/' target="_blank">
            <img src={twitterIcon} alt="Twitter icon"/>
          </a>
          <a href='https://github.com/' target="_blank">
            <img src={githubIcon} alt="Github icon"/>
          </a>
          <a href='https://linkedin.com/' target="_blank">
            <img src={linkedinIcon} alt="LinkedIn icon"/>
          </a>
        </span>
        <p className={styles.description}>
          Learning Today, Building AI Tomorrow
        </p>
        <a href={CV} download>
          <button className="hover">
            Resume
          </button>
        </a>
      </div>
    </section> 
  );
}

export default Hero;
