import { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoDocumentAttach } from "react-icons/io5";
import { Link } from "react-router-dom";

const comingSoonAllLanguages = [
  "Coming Soon",
  "जल्द आ रहा है",
  "শীঘ্রই আসছে",
  "ಶೀಘ್ರದಲ್ಲಿ ಬರುತ್ತಿದ್ದಾರೆ",
  "लवकरच येत आहे",
  "ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ",
  "ટૂંક સમયમાં આવી રહ્યું છે",
  "விரைவில் வருகிறது ",
  "త్వరలో వస్తుంది",
  "விரைவில் வருகிறது",
];

const Homepage = () => {
  const currentLanguageRef = useRef(0);
  const [comingSoonText, setComingSoonText] = useState("Loading");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setComingSoonText(comingSoonAllLanguages[currentLanguageRef.current]);
      currentLanguageRef.current === comingSoonAllLanguages.length - 1
        ? (currentLanguageRef.current = 0)
        : (currentLanguageRef.current += 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <HomepageWrapper>
      <ComingSoonTextWrapper>
        <TransitionGroup className="comingSoonText">
          <CSSTransition
            key={currentLanguageRef.current}
            timeout={3000}
            classNames="messageout"
          >
            <div>{comingSoonText}...</div>
          </CSSTransition>
        </TransitionGroup>
      </ComingSoonTextWrapper>
      <FooterLinkWrapper>
        <Link
          to="https://www.linkedin.com/in/manish-kumar-dev/"
          target="_blank"
        >
          <FaLinkedinIn size="2rem" cursor="pointer" />
        </Link>
        <Link to="https://github.com/Manish-kumar-DEV" target="_blank">
          <FaGithub size="2rem" cursor="pointer" />
        </Link>
        <Link to="mailto:manishkumardev17@gmail.com" target="_blank">
          <MdOutlineMail size="2rem" cursor="pointer" />
        </Link>
        <a href={"/resume.pdf"} download="Manish-Kumar-SDE-Resume">
          <IoDocumentAttach size="2rem" cursor="pointer" />
        </a>
      </FooterLinkWrapper>
    </HomepageWrapper>
  );
};

const HomepageWrapper = styled.div`
  color: white;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: black;
`;

const ComingSoonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const FooterLinkWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export default Homepage;
