import styles from "./ResumeTooltip.module.css";
const ResumeTooltip = () => {
  return (
    <div className={styles["tooltip-resume-container"]}>
      <div className={styles["tooltip-resume"]}>
        <div className={styles.profile}>
          <div className={styles.user}>
            {/* <div className="img"></div> */}
            <div className={styles.details}>
              <div className={styles.name}>Manish Kumar</div>
              <div className={styles.username}>Manish-Kumar-SDE-Resume</div>
            </div>
          </div>
          <div className={styles.about}>Download</div>
        </div>
      </div>
      <div className={styles.text}>
        <a
          className={styles.icon}
          href="/resume.pdf"
          download="Manish-Kumar-SDE-Resume"
        >
          <div className={styles.layer}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className={styles.fab}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 64 64"
                width={"32px"}
              >
                <path d="m55.707 11.293-10-10A1.115 1.115 0 0 0 45 1H9a1 1 0 0 0-1 1v60a1 1 0 0 0 1 1h46a1 1 0 0 0 1-1V12a1.092 1.092 0 0 0-.293-.707zM52.586 11H46V4.414zM10 61V3h34v9a1 1 0 0 0 1 1h9v48z" />
                <path d="M34 8h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM34 13h7a1 1 0 0 0 0-2h-7a1 1 0 0 0 0 2zM50 16H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 21H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 26H34a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zM50 31H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 36H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 41H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 46H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 51H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM50 56H14a1 1 0 0 0 0 2h36a1 1 0 0 0 0-2zM22 19a5 5 0 1 0-5-5 5.006 5.006 0 0 0 5 5zm0-8a3 3 0 1 1-3 3 3 3 0 0 1 3-3z" />
                <path d="M14 28h16a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H14a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1zm1.473-2a7.325 7.325 0 0 1 13.054 0zM29 8v15.164a9.325 9.325 0 0 0-14 0V8z" />
              </svg>
            </span>
          </div>
          <div className={styles.text}>Resume</div>
        </a>
      </div>
    </div>
  );
};

export default ResumeTooltip;
