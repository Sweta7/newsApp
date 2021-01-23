import React from "react";
//import { footer } from 'react-bootstrap'
const style = {
  color: 'white'
}

const Footer = () => {
  return (
    <div>
      <footer className="footer" id="contact">
        <p style={style} className="copyright small">Copyright &copy; 2019 Sweta kumari
        </p>
      </footer>
    </div>
  );
}

export default Footer;