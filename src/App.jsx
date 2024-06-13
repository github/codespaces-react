import './App.css';
import styled from 'styled-components';

const App = () => {
  return (
    <>
      <HeroDiv>
        <Logo src="logo-white.svg" alt="BFAM Partners" />
        <Timelapse />
        <Overlay />
        <BFAMBio />
      </HeroDiv>
      <ContactInfo/>
      <Footer/>
    </>

  );
}

const Logo = styled.img`
  width: 160px;
  padding-top: 50px;
  padding-left: 130px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

// create a component that displays video-hero.mp4 on loop
const Timelapse = () => {
  return (
    <StyledVideo autoPlay loop muted>
      <source src="video-hero.mp4" type="video/mp4" />
    </StyledVideo>
  );
}

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

//overlay doesn't cover the styled video, could modify height manually, but not ideal
const Overlay = styled.div` 
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%; 
  background: rgba(0, 47, 108, 0.8);
`;

const BFAMBio = () => {
  return (
    <Wrapper>
      <StyledHeader>
        BFAM Partners
      </StyledHeader>
      <StyledParagraph> BFAM Partners combines deep Asian market experience with world-class financial expertise and leading-edge technology to generate absolute returns.</StyledParagraph>
      <StyledParagraph> Opportunities in Credit, Equity, and Volatility drive the investment strategy. Founded in 2012 by Benjamin Fuchs, the team is headquartered in Hong Kong. </StyledParagraph>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding-bottom: 100px;
`;

const StyledParagraph = styled.p`
  color: white;
  position: relative;
  padding-left: 130px;
  padding-right: 130px;
  max-width: 50%;
  
  top: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 25px;
`;

const StyledHeader = styled.h1`
  color: white;

  position: relative;
  padding-left: 130px;
  padding-right: 130px;
  top: 0;
  
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 72px;
  line-height: 56px;
  margin-bottom: 25px;
  text-transform: uppercase;
`;


// create a styled component div that spans the whole width and height of the screen and sets the colour to white
const HeroDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  max-width: 100%;
`;

const ContactInfo = () => {
  return (
    <ContactDiv>
      <div>
        <ContactHeader>Contact Us</ContactHeader>
        <ContactParagraph> 32/F, 148 Electric Road, North Point, Hong Kong | info@bfam-partners.com </ContactParagraph>
      </div>
      <div>
        <ContactHeader>Telephone</ContactHeader>
        <ContactParagraph> +852 3409 8888 </ContactParagraph>
      </div>
    </ContactDiv>
  );
}

const ContactDiv = styled.div`
  // position: relative;
  // width: 100vw;
  height: 14vh;
  background-color: white;
  max-width: 100%;
  padding: 0 130px;
  display: flex;
  align-items: center;
  gap: 400px;
`;

const ContactHeader = styled.h1`
  color: #002f6c;
  font-family: "Libre Franklin", sans-serif;
  // font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 18px;

  
  
`;

const ContactParagraph = styled.p`
  color: #3d3d3d;
  font-family: "Libre Franklin", sans-serif;
  // font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 15px;



`;

const Footer = () => {
  return (
    <FooterDiv>
      ©2012 - 2024 BFAM Partners TM 
    </FooterDiv>
  );
}

const FooterDiv = styled.div`
  // position: relative;
  // width: 100vw;
  // height: 10vh;
  padding: 20px 130px;
  background-color: #002f6c;
  max-width: 100%;

  display: flex;
  color: white;
  font-family: "Libre Franklin", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 14px;
  text-transform: uppercase;
`;


export default App;
