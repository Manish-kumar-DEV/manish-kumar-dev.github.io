import "./ResumeTooltip.css";
const ResumeTooltip = () => {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            {/* <div className="img"></div> */}
            <div className="details">
              <div className="name">Manish Kumar</div>
              <div className="username">Manish-Kumar-SDE-Resume</div>
            </div>
          </div>
          <div className="about">Download</div>
        </div>
      </div>
      <div className="text">
        <a
          className="icon"
          href="/resume.pdf"
          download="Manish-Kumar-SDE-Resume"
        >
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-linkedin">
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
          <div className="text">Resume</div>
        </a>
      </div>
    </div>
  );
};

export default ResumeTooltip;
