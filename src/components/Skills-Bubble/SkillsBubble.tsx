import BubbleUI from "react-bubble-ui";
import "react-bubble-ui/dist/index.css";
import styles from "./myComponent.module.css";
import mySkills from "./skillsData";
import SkillBubble from "./SkillBubble";
import { useEffect, useState } from "react";
import useSmallScreenSize from "../../hooks/useSmallScreenSize";

const SkillsBubble = (props: any) => {
  const isSmallScreen = useSmallScreenSize();
  const getStockBubbles = () => {
    return mySkills.map((skill, i) => {
      return <SkillBubble {...skill} key={i} />;
    });
  };
  console.log("Is small Screen Size", isSmallScreen);
  const stockBubbles = getStockBubbles();
  const [options, setOptions] = useState({
    size: 180,
    minSize: 25,
    gutter: 8,
    provideProps: true,
    numCols: 7,
    fringeWidth: 160,
    yRadius: 130,
    xRadius: 220,
    cornerRadius: 50,
    showGuides: 0,
    compact: true,
    gravitation: 5,
  });

  useEffect(() => {
    if (isSmallScreen) {
      setOptions({
        ...options,
        size: 140,
        gutter: 10,
        xRadius: 130,
        fringeWidth: 100,
        numCols: 5,
      });
    } else if (!isSmallScreen) {
      setOptions({
        ...options,
        size: 180,
        gutter: 8,
        xRadius: 220,
        fringeWidth: 160,
        numCols: 7,
      });
    }
  }, [isSmallScreen]);

  return (
    <div className={styles.bubbleUIContainer}>
      <BubbleUI options={options} className={styles.myBubbleUI}>
        {stockBubbles}
      </BubbleUI>
    </div>
  );
};

export default SkillsBubble;
