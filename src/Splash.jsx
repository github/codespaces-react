import styled from 'styled-components';
import { useEffect, useState } from 'react';


const Splash = ({setPage}) => {
  const [cursorx, setCursorx] = useState(0);
  const [cursory, setCursory] = useState(0);

  const coordinates = (event) => {
    setCursorx(event.clientX);
    setCursory(event.clientY);
    // let cursorx = event.clientX;
    // let cursory = event.clientY;
    // console.log(cursorx, cursory);
  }
  return (
    <StyledSplash onMouseMove={coordinates} onClick={()=>setPage(1)}>
        <EntrancePic src="photo-entrance.jpg" alt="BFAM Partners" />
        <Spotlight cursorX={cursorx} cursorY={cursory} />
        <Logo src="logo-blue.svg" alt="BFAM Partners"/>
    </StyledSplash>
    
  );
}

const Spotlight = styled.div`
  position: fixed;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(circle 15vmax at ${props => props.cursorX}px ${props => props.cursorY}px, rgba(255, 255, 255, 0) 0%, #fff 100%);
  `;

const StyledSplash = styled.div`
    `;

const EntrancePic = styled.img`
  position: absolute;
  width: 100%;
  height: 100%
    `;

const Logo = styled.img`
  position: absolute;
  width: 280px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export default Splash;