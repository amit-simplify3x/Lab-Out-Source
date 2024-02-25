import React from 'react';
import {AiFillInstagram,AiFillLinkedin,AiFillGithub} from "react-icons/ai";
import '../styles/Footer.css'



const Footer = () => {
   return (
  <footer>
  <div>
    <h2>Pathology Lab</h2>
    <p>Cellular pathology is not an end if one cannot see any alteration in the cell. Chemistry brings the clarification of living processes nearer than does anatomy. Each anatomical change must have been preceded by a chemical one.</p>
    <br/>
    <em>We give attention to genuine feedback.</em>
    <strong>All right received @DesiPathologyLab</strong>
  </div>
<aside>
    <h4>Follow us</h4>
     <a href="https://www.linkedin.com/in/am12it/"><AiFillLinkedin/></a>
    <a href="https://github.com/amit-simplify3x"><AiFillGithub/></a>
    <a href="https://instagram.com/amitkumarverma2001"><AiFillInstagram/></a>
</aside>
  </footer>
  );
};

export default Footer;
