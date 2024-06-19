import styled from "styled-components";
import Footer from './Footer';
import ContactInfo from './ContactInfo';
import NavBar from './NavBar';
import PagePath from './PagePath';

const PrivacyPolicy = ({setPage}) => {

    return (
        <>
            <NavBar/>
            <PagePath setPage={setPage} pageName={"Privacy Policy"}/>
            <StyledPolicy>
                <Header>Privacy Policy</Header>
                <LegalJargonBox/>
                {/* <StyledButton onClick={()=>setPage(1)}>Agree</StyledButton> */}
            </StyledPolicy>
            <ContactInfo/>
            <Footer setPage = {setPage}/>
        </>
    );
    }  

const StyledPolicy = styled.div`
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
            <StyledJargon>BFAM Partners is dedicated to protecting the confidentiality and privacy of personal information (more commonly referred to as personal data) collected online or through online or electronic communications. Generally, BFAM Partners only collects personal data that is provided by business counterparties or voluntarily by individuals so that it can offer information and/or services to those businesses and individuals or offer information about employment opportunities. Please review this policy (“Privacy Policy”) to learn more about how BFAM Partners collects, uses, shares and protects your personal data.</StyledJargon>
            <StyledJargon><em>Collection and use of personal data</em></StyledJargon>
            <StyledJargon>BFAM Partners may collect and review your contact details (“personal data”) via this website, solely for the purpose of identifying you in order to assess the suitability of granting you access to certain information contained on this website which BFAM Partners would like to safeguard. BFAM Partners will also process your personal data for the same purpose only. Your behaviour on this website may be tracked. For the purposes of data protection laws, BFAM Partners are the data controllers (or data users) of your personal data.  BFAM Partners may disclose and transfer your personal data to its group companies and affiliates (“Relevant Parties”) located anywhere in the world (in or outside the country or jurisdiction in which the group companies and affiliates are located) as and when considered necessary by BFAM Partners for the same purposes above.  When BFAM Partners transfers, stores, processes and/or deals with personal data outside the jurisdictions in which BFAM Partners conducts its businesses, BFAM Partners has polices in place to comply with applicable data protection and privacy laws, including taking reasonable steps to prevent the unauthorised access, collection, use and disclosure of personal data.</StyledJargon>
            <StyledJargon>BFAM Partners will only keep your personal data provided above for as long as is required in order to grant you assess to the website. By submitting your personal data to BFAM, you consent to the collection of your personal data, and its transfer of your personal data to the other recipients as described in this notice that may be located in countries outside of the jurisdiction in which you are located.</StyledJargon>
            <StyledJargon>BFAM Partners (Hong Kong) Limited (“<StrongStyled>we</StrongStyled>”, “<StrongStyled>us</StrongStyled>”, “<StrongStyled>our</StrongStyled>”) uses Google Analytics, which is a web analytics tool that helps us understand how users engage with our website and services. Google Analytics uses first-party cookies to track user interactions and collect information about how users interact with our website. We use this information to compile reports and to help us improve our website and services. The reports disclose website trends without disclosing the personal data of our users. You can opt out of Google Analytics without impacting how you visit our website or receive the services.&nbsp; For further information regarding opting out of Google Analytics, please visit this Google page: <Link href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</Link></StyledJargon>
            <StyledJargon><em>Your rights in relation to personal data</em></StyledJargon>
            <StyledJargon>You may have a right of access to your personal data kept by the Relevant Parties, a right to amend and rectify any inaccuracies in your personal data held by the Relevant Parties, a right to erase the personal data held by the Relevant Parties, a right to cease any processing or a right to obtain your personal data in a structured, commonly used, machine-readable and interoperable format, by making a request in writing to BFAM. You may also have the right to lodge a complaint with the local data protection authority. These rights are subject to certain exceptions and conditions under the applicable laws. You may withdraw your consent to provide BFAM Partners with your personal data above at any time.</StyledJargon>
            <StyledJargon>Right to object – please note that, where a right to object is available under the applicable laws, you have a right to object to processing of your personal data where that processing is carried out for the Relevant Parties legitimate interests. Such requests, if fulfilled, may limit the services BFAM Partners can provide to you. You can make a request or exercise these rights, by contacting us as stated below.</StyledJargon>
            <StyledJargon><em>----------------------------------------------------------------------------------------</em></StyledJargon>
            <StyledJargon><StrongStyled>Privacy Notice For California Consumers</StrongStyled></StyledJargon>
            <StyledJargon>This notice contains disclosures required by the California Consumer Privacy Act (“CCPA”), is only relevant to residents of California, and applies only to the collection or other use of “personal information” that is subject to the CCPA.</StyledJargon>
            <StyledJargon><StrongStyled>Information We Collect.</StrongStyled> In the past 12 months, we may have collected the following categories of personal information about California consumers:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</StyledJargon>
            <StyledJargon>
                <PrivacyTable /> 
                {/* how do i find the exact gray they used for the table */}
            </StyledJargon>
            <StyledJargon>We do not knowingly collect or solicit personal information from anyone under the age of 18. We collect personal information from your communications with us.</StyledJargon>
            <StyledJargon><StrongStyled>Use of Your Personal Information.</StrongStyled> &nbsp;We may use the personal information we collect to send you information about our services, to provide you with performance and other updates, for legal compliance, and in our internal operations.</StyledJargon>
            <StyledJargon><StrongStyled>Sharing Personal Information. &nbsp;</StrongStyled>We may provide personal information to affiliates, service providers (including, but not limited to, administrators, auditors, and law firms), and legal or regulatory authorities as required by applicable law. In the past 12 months, we have not sold any personal information we collect to third parties, and we have shared the categories of personal information we collect only as set forth above.</StyledJargon>
            <StyledJargon><StrongStyled>Rights of California Consumers. &nbsp;</StrongStyled>The CCPA provides a California consumer the following rights, subject to certain exceptions and limitations:</StyledJargon>
            <StyledJargon>
                <ul>
                    <li>The right to request (a) the categories and specific pieces of personal information we collect, use, disclose, and sell about you, (b) the categories of sources from which we collected your personal information, (c) our purposes for collecting or selling your personal information, (d) the categories of your personal information (if any) that we have either sold or disclosed for a business purpose, and (e) the categories of third parties with which we have shared personal information;</li>
                    <li>For certain categories of personal information, the right to request a list of what personal information (if any) we disclosed to third parties for their own direct marketing purposes in the past 12 months and the names and addresses of those third parties;</li>
                    <li>The right to request that we delete the personal information we have collected from you or maintain about you;</li>
                    <li>The right to opt out of our sale(s) (if any) of your personal information; and</li>
                    <li>The right not to receive discriminatory treatment for the exercise of the privacy rights conferred by the CCPA.</li>
                </ul>
            </StyledJargon>
            <StyledJargon>Please refer to below section on Contact Information or Complaints, if you wish to submit requests relating to your exercise of rights under the CCPA.</StyledJargon>
            <StyledJargon><em>----------------------------------------------------------------------------------------</em></StyledJargon>
            <StyledJargon><em>Confidentiality and security</em></StyledJargon>
            <StyledJargon>BFAM Partners takes its confidentiality obligations owed to you seriously and will only provide your personal data on a need-to-know basis to the relevant and required parties for the purposes specified above. BFAM Partners has a policy of protecting the confidentiality and security of your personal data and employs physical, electronic and procedural safeguards to protect your personal information in our possession or under our control. Where required by applicable data protection law, BFAM Partners will notify you in the event of a data breach incident (if any).</StyledJargon>
            <StyledJargon><em>Changes or amendments to BFAM’s Privacy Policy </em></StyledJargon>
            <StyledJargon>BFAM Partners reserves the right to change or amend this Privacy Policy from time to time. If we make any substantial changes in the way we use or share your personal information, BFAM Partners will notify you by posting a notice on our website, prior to the change becoming effective. We encourage you to refer to BFAM’s Privacy Policy on an ongoing basis so you understand our current privacy practices.</StyledJargon>
            <StyledJargon><em>Contact information or complaints</em></StyledJargon>
            <StyledJargon>If you have questions or comments about your personal information, please contact us via phone at +852 3409 8888 or by submitting a request by email to info@bfam-partners.com. You may also use this email address to communicate any concerns you may have regarding compliance with our Privacy Policy. BFAM Partners will acknowledge your email within 14 days and seek to resolve your concern within 30 days of receipt. We may accept your concern (and in that case implement one of the measures set out in the 'Your Rights' section above), or we may reject your concern, the reasons for which will be fully outlined in our communication with you.</StyledJargon>
            <StyledJargon>If you are not satisfied with the response you receive, you have the right to escalate a complaint to Privacy Commissioner for Personal Data (Hong Kong) by post, in person, by fax or by email at <Link href="mailto:complaints@pcpd.org.hk">complaints@pcpd.org.hk</Link>.</StyledJargon>
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
    font-family: "Libre Franklin", sans-serif;
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

const StrongStyled = styled.strong`
    font-family: "Libre Franklin", sans-serif;
    font-weight: 500;
    color: #3d3d3d;
    `;


const Table = styled.table`
    display: table;
    border-color: gray;
    border: 2px solid gray;
    color: gray;
    width: 99.82%;
    box-sizing: border-box;
    border-collapse: separate;

    border-top-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-right-width: 2px;
    -webkit-border-horizontal-spacing: 0px;
    -webkit-border-vertical-spacing: 0px;

 
`;

const TableHeader = styled.th`
    width: 37.5%;
    text-align: center;
    border-right: 2px solid #808080; /* Add border to split columns */
    &:last-child {
        border-right: 0; /* Remove right border for the last header cell */
    }
    font-size: 15px;
    margin-bottom: 15px;
    line-height: 26px;
`;

const TableData = styled.td`
    display: table-cell;
    vertical-align: inherit;
    font-size: 15px;
    padding-bottom: 15px;
    line-height: 26px;
    width: 62.5%;
    padding-left: 0.2in;
    border-right: 2px solid #808080; /* Add border to split columns */
    border-top: 2px solid #808080; /* Add border to split rows */
    &:last-child {
        border-right: 0; /* Remove right border for the last data cell */
    }
`;

const TableDataRow = styled.td`
    display: table-cell;
    vertical-align: inherit;

    font-size: 15px;
    line-height: 26px;
    width: 37.5%;
    padding-left: 0.2in;
    padding-right: 15px;
    padding-bottom: 15px;
    border-right: 2px solid #808080; /* Add border to split columns */
    border-top: 2px solid #808080; /* Add border to split rows */
    &:last-child {
        border-right: 0; /* Remove right border for the last data cell */
    }

`;

const PrivacyTable = () => {
    return (
        <Table>
            <tbody>
                <tr>
                    <TableHeader>
                        <StrongStyled>Category</StrongStyled>
                    </TableHeader>
                    <TableHeader>
                        <StrongStyled>Examples</StrongStyled>
                    </TableHeader>
                </tr>
                <tr>
                    <TableDataRow>
                        &nbsp;A. Identifiers
                    </TableDataRow>
                    <TableData>
                        A real name, alias, email address, postal address, Internet Protocol (IP) address, account name, Social Security number, driver’s license number, passport number, or other similar personal identifiers.
                    </TableData>
                </tr>
                <tr>
                    <TableDataRow>
                        &nbsp;B. Other personal information categories, as listed in the California Customer Records statute
                    </TableDataRow>
                    <TableData>
                        A signature, physical characteristics or description, telephone number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information.
                    </TableData>
                </tr>
                <tr>
                    <TableDataRow>
                        &nbsp;C. Protected classification characteristics under California or federal law
                    </TableDataRow>
                    <TableData>
                        Age (40 years or older), race, citizenship, marital status, sex, or veteran or military status.
                    </TableData>
                </tr>
            </tbody>
        </Table>
    );
};

// Replace the original code with the new component

const Link = styled.a`
    font-family: "Libre Franklin", sans-serif;
    font-weight: 500;
    color: #3d3d3d;
    text-decoration: none;
    `;

export default PrivacyPolicy;