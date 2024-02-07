import { useEffect, useRef, useState } from "react";
import "./Homepage.css";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LinkedInTooltip from "../components/LinkedIn/LinkedInTooltip";
import GitHubTooltip from "../components/GitHub/GitHubTooltip";

import MailTooltip from "../components/Mail/MailTooltip";
import ResumeTooltip from "../components/Resume/ResumeTooltip";
import SkillsBubble from "../components/Skills-Bubble/SkillsBubble";

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

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setComingSoonText(comingSoonAllLanguages[currentLanguageRef.current]);
  //     currentLanguageRef.current === comingSoonAllLanguages.length - 1
  //       ? (currentLanguageRef.current = 0)
  //       : (currentLanguageRef.current += 1);
  //   }, 3000);

  //   return () => clearInterval(intervalId);
  // }, []);
  return (
    <SkillsBubble />
    //  <HomepageWrapper>
    //   <ComingSoonTextWrapper>
    //     <TransitionGroup className="comingSoonText">
    //       <CSSTransition
    //         key={currentLanguageRef.current}
    //         timeout={3000}
    //         classNames="messageout"
    //       >
    //         <div>{comingSoonText}...</div>
    //       </CSSTransition>
    //     </TransitionGroup>
    //   </ComingSoonTextWrapper>
    //   <FooterLinkWrapper>
    //     <LinkedInTooltip />
    //     <GitHubTooltip />
    //     <ResumeTooltip />
    //     <MailTooltip />
    //   </FooterLinkWrapper>
    // </HomepageWrapper>
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
  overflow: hidden;
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
  gap: 25px;
`;

export default Homepage;
