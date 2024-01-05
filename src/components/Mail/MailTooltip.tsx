import "./MailTooltip.css";

const MailTooltip = () => {
  return (
    <div className="tooltip-container">
      <div className="tooltip">
        <div className="profile">
          <div className="user">
            {/* <div className="img"></div> */}
            <div className="details">
              <div className="name">Manish Kumar</div>
              <div className="username">manishkumardev17@gmail.com</div>
            </div>
          </div>
          <div className="about">Let's get in touch!</div>
        </div>
      </div>
      <div className="text">
        <a
          className="icon"
          href="mailto:manishkumardev17@gmail.com"
          target="_blank"
        >
          <div className="layer">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="fab fa-linkedin">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="32px"
                id="email"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
              </svg>
            </span>
          </div>
          <div className="text">Mail</div>
        </a>
      </div>
    </div>
  );
};

export default MailTooltip;
