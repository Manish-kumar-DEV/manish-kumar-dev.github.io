import useSmallScreenSize from "../../hooks/useSmallScreenSize";
import styles from "./myComponent.module.css";

export default function SkillBubble(props: any) {
  const isSmallScreen = useSmallScreenSize();

  return (
    <div
      style={{
        backgroundColor: props.backgroundColor + "d0",
      }}
      className={styles.companyBubble}
    >
      {true ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            transition: "opacity 0.1s ease",
            opacity: props.bubbleSize > 50 ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          <img
            src={`./skillsLogo/${props.symbol}.svg`}
            alt=""
            style={{
              width: isSmallScreen ? 50 : 70,
              height: "100%",
              borderRadius: `50%`,
              margin: "0 auto",
              marginBottom: isSmallScreen ? 0 : 10,
            }}
          ></img>
          <p
            style={{
              color: props.textColor,
              fontSize: 14,
              marginBottom: isSmallScreen ? 0 : 6,
              fontWeight: 1000,
              maxWidth: 150,
              textAlign: "center",
            }}
          >
            {props.name}
          </p>
        </div>
      ) : null}
    </div>
  );
}
