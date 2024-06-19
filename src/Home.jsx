import styled from 'styled-components';
import { useEffect } from 'react';
import Footer from './Footer';
import ContactInfo from './ContactInfo';

const Home = ({setPage}) => {
  
  useEffect(() => {
    document.cookie = 'has_visited_before=true; path=/';
  }, [])

  return (
    <>
      <HeroDiv>
        <Logo src="logo-white.svg" alt="BFAM Partners" />
        <Timelapse />
        <Overlay />
        <BFAMBio />
      </HeroDiv>
      <ContactInfo/>
      <Footer setPage = {setPage}/>
    </>

  );
}

//Sizing is screwed below 307px, potentially add this parameter to the media styled component

const Logo = styled.img`
  width: 160px;
  padding-top: 50px;
  padding-left: 130px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 991px) {
    padding-left: 80px;
  }

  @media (max-width: 750px) {
    padding-left: 40px;
    padding-top: 40px;
  }

  @media (max-width: 500px) {
    left: 50%;
    transform: translateX(-50%);
  }

  
`;

// create a component that displays video-hero.mp4 on loop
const Timelapse = () => {
  return (
    <StyledVideo autoPlay loop muted playsInline>
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

  @media (max-width: 991px) {
    height: 100vh;
  }

  @media (max-width: 750px) {
    height: 100vh;
  }

  @media (max-width: 500px) {
    height: 100vh;
  }
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

  @media (max-width: 991px) {
  padding-bottom: 80px;
  }
  @media (max-width: 750px) {
  padding-bottom: 60px;
  }
  @media (max-width: 500px) {
    left: 50%;
    top: 64%;
    transform: translate(-50%, -50%);
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px;
    width: 90%;

  }
`;

const StyledParagraph = styled.p`
  color: white;
  position: relative;
  padding-left: 130px;
  padding-right: 130px;
  
  top: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 200;
  font-style: normal;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 25px;

  @media (max-width: 991px) {
    font-size: 24px;
    padding-left: 80px;
    padding-right: 80px;
    line-height: 28px;
    margin-bottom: 25px;
  }

  @media (max-width: 750px) {
    font-size: 20px;
    padding-left: 60px;
    padding-right: 40px;
    line-height: 28px;
    margin-bottom: 16px;
  }

  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 28px;
    margin-bottom: 5px;
    align-self: center;
    padding: 0px;
    text-align: center;
  }
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

  @media (max-width: 991px) {
    margin-bottom: 16px;
    font-size: 64px;
    padding-left: 80px;
    padding-right: 0px;
    
  }

  @media (max-width: 750px) {
    margin-bottom: 6px;
    font-size: 54px;
    padding-left: 60px;
  }

  @media (max-width: 500px) {
    padding: 0px;
    margin-bottom: 20px;
    font-size: 46px;
    align-self: center;
    text-align: center;
  }
`;


// create a styled component div that spans the whole width and height of the screen and sets the colour to white
const HeroDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  max-width: 100%;

  @media (max-width: 991px) {
    height: 100vh;
  }

  @media (max-width: 750px) {
    height: 100vh;
  }

  @media (max-width: 500px) {
    height: 100vh;
  }
`;

export default Home;
