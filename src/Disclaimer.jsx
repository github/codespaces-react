import styled from "styled-components";
import Footer from './Footer';
import ContactInfo from './ContactInfo';
import NavBar from './NavBar';
import PagePath from './PagePath';

const Disclaimer = ({setPage}) => {

    return (
        <>
            <NavBar/>
            <PagePath setPage={setPage} pageName={"Disclaimer"}/>
            <StyledDisclaimer>
                <Header>Disclaimer</Header>
                <LegalJargonBox/>
                {/* <StyledButton onClick={()=>setPage(1)}>Agree</StyledButton> */}
            </StyledDisclaimer>
            <ContactInfo/>
            <Footer setPage = {setPage}/>
        </>
    );
    }  

const StyledDisclaimer = styled.div`
    height: 100%;
    max-width: 100%;   
    background: #fff;
    padding: 30px 130px;
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
    }
    `;

const Header = styled.h1`
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-style: normal;

    font-size: 23px;
    line-height: 32px;
    margin-bottom: 30px;
    color: #002f6c
    `;

const LegalJargonBox = () => {
    return (
        <LegalJargon>
            <StyledJargon>By accessing this website and any of its pages you are agreeing to the terms set out below.</StyledJargon>
            <StyledJargon>The information contained on this website is provided for informational purposes only and have not been approved by the Securities and Futures Commission of Hong Kong, the U.S. Securities and Exchange Commission, the U.S. Commodity Futures Trading Commission or any other regulator. The website is for “professional investors” (as defined in the Securities and Futures Ordinance, Cap. 571) only and is not for retail use.</StyledJargon>
            <StyledJargon>The information in this website: (i) is general information only; (ii) should not be considered as a comprehensive statement on any matter and should not be relied on as such; (iii) may not be reproduced or redistributed without BFAM’s prior written consent; (iv) may not be relied on as an offer to sell or a solicitation of an offer to buy an interest in any entity managed by BFAM Partners (Hong Kong) Ltd, its affiliates, or group companies (“BFAM”); and (v) is not intended and should not be construed as investment, tax, legal, financial or other advice.</StyledJargon>
            <StyledJargon>PAST PERFORMANCE IS NOT NECESSARILY INDICATIVE OF FUTURE RESULTS.  THE POTENTIAL FOR PROFIT IS ACCOMPANIED BY THE RISK OF LOSS.            </StyledJargon>
            <StyledJargon>The investments described on this website and any of its pages may be unsuitable for investors, depending on their specific investment objectives and financial situations.             </StyledJargon>
            <StyledJargon>All information provided on this website, including hyperlinks to external third party websites, is provided on an “as is” basis without warranty of any kind. BFAM, its directors, officers, agents and funds managed or advised by it (together, the “Group”) expressly disclaim all warranties and conditions with regard to the information on this website or information accessible via hyperlinks on any third party website shown on this website.  By providing hyperlinks to an external website or webpage, BFAM shall not be deemed to endorse, recommend, approve, guarantee or introduce any third parties or the services/products they provide on their websites as stated in our Hyperlink policy (see below).            </StyledJargon>
            <StyledJargon>Nothing in this website shall give rise to a fiduciary duty, advisory or other relationship between you and BFAM and the Group accepts no responsibility in any way including by reason of negligence for errors or omissions contained in this website. All information provided on this website is provided as of the date indicated.BFAM has no obligation to update any information in this website and specifically disclaims any warranty as to the currency of any information contained herein. BFAM may terminate your access to this website for any reason, without prior notice.            </StyledJargon>
            <StyledJargon>This website is protected by applicable copyright laws. You may not reproduce, publish, transmit, reuse, copy, distribute, modify, post or frame-in any information or material on this website without BFAM’s prior consent. All trademarks on this website belong to BFAM, except for third party trademarks which are the property of their respective owners.</StyledJargon>
            <StyledJargon>BFAM does not endorse and is not affiliated with any third party hyperlinks shown on this website (or any information or materials appearing on such third party website or webpage). BFAM has not audited, reviewed or otherwise verified such information and accordingly makes no representation and disclaims all warranties (express or implied) with regard to the accuracy, completeness, fairness or otherwise of such information. BFAM is not responsible for the content or information accessible via any externally linked website or webpage. Your use or navigation to external webpages associated with such hyperlinks is at your own risk and BFAM is not responsible for any damages or losses incurred or suffered by you arising out of or in connection with your use of such hyperlinks. When clicking on a hyperlink and leaving BFAM’s website, you will be subject to the terms of use and privacy policies of the third party website.</StyledJargon>
            <StyledJargon>Climate-related Risk Disclosures</StyledJargon>
            <StyledJargon>BFAM Partners (Hong Kong) Limited has established a climate risk working group to provide oversight of climate-risk related initiatives. The working group is responsible for approving the framework and policies to assess and manage the climate-related risks relevant to our investment strategies. BFAM Partners (Hong Kong) Limited has engaged a third-party ESG service provider that uses established frameworks such as SASB to assist with the climate-related risk assessment. The working group will periodically monitor the climate related metrics, and report to the Board at least annually.</StyledJargon>
            <StyledJargon>If you need any further help, please feel free to contact us at info@bfam-partners.com</StyledJargon>
        </LegalJargon>
    );
}

const LegalJargon = styled.div`
    text-transform: uppercase;
    font-family: "Libre Franklin", sans-serif;
    font-optical-sizing: auto;
    font-weight: 800;
    font-style: normal;
    color: #3d3d3d;
    `;

const StyledJargon = styled.p`
    text-transform: none;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 17px;
    line-height: 26px;

    word-break: break-word;
    word-wrap: break-word;   
    
    @media (max-width: 991px) {;
        font-size: 16px;
    }
    @media (max-width: 750px) {
        font-size: 15px;
    }
    @media (max-width: 500px) {
        font-size: 14px;
    }
`;



export default Disclaimer;