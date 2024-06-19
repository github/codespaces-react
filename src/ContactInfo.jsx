import styled from 'styled-components';

const ContactInfo = () => {
  return (
    <ContactDiv>
      <div>
        <ContactHeader>Contact Us</ContactHeader>
        {/* <ContactParagraph> <p>32/F, 148 Electric Road, North Point, Hong Kong | </p><p> info@bfam-partners.com</p> </ContactParagraph> */}
        <ContactParagraph> 35/F, 148 Electric Road, North Point, Hong Kong  &nbsp; &nbsp; | &nbsp; &nbsp; info@bfam-partners.com </ContactParagraph>
      </div>
      <div>
        <ContactHeader>Telephone</ContactHeader>
        <ContactParagraph> +852 3409 8888 </ContactParagraph>
      </div>
    </ContactDiv>
  );
}

const ContactDiv = styled.div`

  height: 14vh;
  background-color: white;
  max-width: 100%;
  padding: 0 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 991px) {
    padding-left: 80px;
    padding-right: 100px;
    justify-content: space-between;
    gap: 10px;
  }

  @media (max-width: 750px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 8px;
    flex-direction: column;
    justify-content: center;
    gap: 0px;
  }

  @media (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;
    gap: 0px;
    height: 14%;
  }
`;

const ContactHeader = styled.h1`
  color: #002f6c;
  font-family: "Libre Franklin", sans-serif;
  // font-optical-sizing: auto;
  font-weight: 600;
  font-style: normal;
  font-size: 18px;

  @media (max-width: 750px) {
    font-size: 16px;
    padding-bottom: 0px;
    text-align: center;
  }
  @media (max-width: 500px) {
    padding-bottom: 0px;

    font-size: 16px;
    text-align: center;
  }
  
`;

const ContactParagraph = styled.p`
  color: #3d3d3d;
  font-family: "Libre Franklin", sans-serif;
  // font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  font-size: 15px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  padding-top: 0px;

  @media (max-width: 750px) {
    font-size: 15px;
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 15px;
    text-align: center;

  }
  
`;

export default ContactInfo;
