import styled from "styled-components";

const PagePath = ({setPage, pageName}) => {
    return (
        <StyledPagePath>
            <p onClick={()=>setPage(1)}>Home</p>
            <p>{'>'}</p>
            <p>{pageName}</p>
        </StyledPagePath>
    );
}

const StyledPagePath = styled.div`
    padding: 20px 130px;
    background-color: #fff;
    max-width: 100%;
    display: flex;
    color: #3D3D3D;
    font-family: "Libre Franklin", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
    font-size: 17px;

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
    }
    `;

export default PagePath;