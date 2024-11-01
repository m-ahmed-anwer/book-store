import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content rounded p-10 ">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/m-ahmed-anwer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577v-2.178c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.419-1.305.762-1.605-2.665-.306-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.006.404 2.292-1.553 3.299-1.23 3.299-1.23.653 1.653.24 2.873.117 3.176.768.84 1.236 1.911 1.236 3.221 0 4.61-2.804 5.623-5.475 5.921.43.372.814 1.104.814 2.222v3.293c0 .319.218.694.825.576 4.765-1.585 8.199-6.081 8.199-11.384 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-anwer-/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 19h-3v-10h3v10zm-1.5-11.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.607c.845-1.159 2.338-1.607 3.5-1.607 2.481 0 4.5 2.019 4.5 4.5v5.5z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Designed and Developed by{" "}
          <a
            className="link"
            href="https://ahmed-anwer.netlify.app/"
            target="_blank"
            rel="author"
          >
            {" "}
            Ahmed Anwer
          </a>{" "}
          ❤️
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
