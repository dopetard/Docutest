import React from "react";

const Footer = ({
  social,
  twitter,
  github,
  facebook,
  telegram,
  email,
  year,
  version
}) => (
  <footer className="footer">
    <div className="container">
      <nav className="pull-left">
        <ul>
          {twitter ? (
            <li className="social">
              <a
                className="twitter"
                href={`https://twitter.com/${twitter}`}
                title=""
              />
            </li>
          ) : null}
          {github ? (
            <li className="social">
              <a className="" href={`https://github.com/${github}`} title="" />
            </li>
          ) : null}
          {telegram ? (
            <li className="social">
              <a
                className=""
                href={`https://t.me/joinchat/${telegram}`}
                title=""
              />
            </li>
          ) : null}
          {facebook ? (
            <li className="social">
              <a
                className=""
                href={`https://facebook.com/${facebook}`}
                title=""
              />
            </li>
          ) : null}

          <li />
          <li />
          {version ? <li /> : null}
        </ul>
      </nav>
      <div className="copyright pull-right">
        {" "}
        Made by <a href="http://proofofexistence.com">Ankur and Paul </a>
        {year ? `- &copy; ${year}` : null}
      </div>
    </div>
  </footer>
);
export default Footer;
