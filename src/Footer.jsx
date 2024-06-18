import styled from 'styled-components';

const Footer = ({setPage}) => {

  return (
    <FooterDiv>
      <p>©2012 - 2024 BFAM Partners TM</p>
      <FooterButton onClick={()=>setPage(2)}>Disclaimer</FooterButton>
      <FooterButton onClick={()=>setPage(3)}>Privacy Policy</FooterButton>
    </FooterDiv>
  );
}

const FooterButton = styled.div`
    color: #fff;
    text-transform: none;

    border: none;
    cursor: pointer;

    @media (max-width: 991px) {
    }

    @media (max-width: 600px) {
    }
    
    @media (max-width: 425px) {
    }
    `;

const FooterDiv = styled.div`
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
  
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

  @media (max-width: 991px) {;
    padding: 20px 80px;
  }

  @media (max-width: 750px) {
    padding: 20px 40px;
    gap: 10px;
  }

  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
     font-size: 10px;
  }
`;

export default Footer;
