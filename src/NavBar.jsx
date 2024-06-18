import styled from "styled-components";

const NavBar = ({ setPage }) => {
    
    return (
        <StyledNavBar>
            <Logo src="logo-blue.svg" alt="BFAM Partners"/>
        </StyledNavBar>
    );
};

const StyledNavBar = styled.div`
    display: flex;
    unicode-bidi: isolate;
    // display: flex;
    // justify-content: center;

    background: #fff;
    color: white;
    box-sizing: border-box;
    height: 80px;
    width: 100%;
    max-width: 100%;
    padding: 30px 130px;

`;

const Logo = styled.img`
    width: 100px;
    align-self: center;
    z-index: 1;
`;

export default NavBar;