import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  font-size: 1.5rem;
  font-weight: 400;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 4fr));
  padding: 4rem 12rem;
  background: #3B3B3B;

  @media (max-width: 1200px) {
    padding: 4rem 6rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 4rem 2rem;
    gap: 2rem;
    font-size: 1.3rem;
  }
`;

const QuickLinksContainer = styled.div`
  ul {
    list-style: none;
  }

  ul li {
    padding: 1rem 2rem;
  }

  ul li a {
    text-decoration: none;
    color: #FFFDFA;
  }
`;

const QuickSocialContainer = styled.div`
  ul {
    list-style: none;
    font-size: 2em;
    display: flex;
    gap: 2rem;
    padding: 1rem 2rem;
  }

  ul li a {
    text-decoration: none;
    color: #FFFDFA;
  }

  @media (max-width: 768px) {
    grid-column: span 2;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #FFFDFA;
`;

const AdresssContaier = styled.div`
  padding: 1rem 2rem;
  color: #FFFDFA;
  ;
  p{
    font-weight: 300;
    letter-spacing: 1px
  }
  `;

const Footer = () => {
  return (
    <FooterContainer>
      <QuickLinksContainer className="quicklinks-container">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/">Services</NavLink></li>
          <li><NavLink to="/">Portfolio</NavLink></li>
        </ul>
      </QuickLinksContainer>
      <QuickLinksContainer className="quicklinks-container">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/">About</NavLink></li>
          <li><NavLink to="/">Services</NavLink></li>
          <li><NavLink to="/">Portfolio</NavLink></li>
        </ul>
      </QuickLinksContainer>
      <QuickSocialContainer className="quickSocial-container">
        <ul>
          <li><a href="https://www.youtube.com"><FaYoutube /></a></li>
          <li><a href="https://twitter.com"><FaTwitter /></a></li>
          <li><a href="https://www.linkedin.com"><FaLinkedin /></a></li>
          <li><a href="https://www.instagram.com"><FaInstagram /></a></li>
          <li><a href="https://www.facebook.com"><FaFacebook /></a></li>
        </ul>
        <AdresssContaier>
          <p> xyz International Pvt Ltd </p>
          <p> Noida, Uttar Pradesh-201009, India  </p>
          <p> Phone: 90304 XXXXXMonday - Saturday: 10.00 AM to 8.00 PM</p>
        </AdresssContaier>
      </QuickSocialContainer>
    </FooterContainer>
  );
};

export default Footer;
