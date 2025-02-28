import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        background: "white",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        padding: "10px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        textAlign: "center"
      }}
    >
      <span style={{ fontSize: "14px", }}>
        Created by Shubham Dubey
      </span>
      <a
        href="https://www.linkedin.com/in/shubhamdubey671/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#0077b5", textDecoration: "none" }}
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;
