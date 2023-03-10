import styled, { css } from "styled-components";

const StyledNavbar = styled.nav`
    display: flex;
    position: absolute;
    padding: 0 10px;
    top: 0;
    left: 0;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    z-index: 100;
    height: 70px;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.3);
    ${props => css`
        justify-content: ${props.justifyContent || 'space-between'};
        background: rgb(252, 252, 252);
    `}
`;

export const NavbarTitle = styled.h3`
    ${props => css`
        color: ${props.theme.main.primary || 'white'};
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 7px;
        span {
            color: ${props.spanColor || props.theme.main.primary};
            text-align: center;
            letter-spacing: 1px;
        }
        img {
            width: 35px;
        }
    `}
`;

export const NavbarOptions = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
`;

export const NavbarOption = styled.li`
    list-style: none;
    overflow: hidden;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        text-decoration: none;
        font-size: 1.1rem;
        text-align: center;
        color: ${props => props.theme.main.primary};
        font-style: bold;
    }
    div {
        height: 2px;
        border-radius: 1px;
        background: ${props => props.theme.main.primary};
        transform: translateX(-110%);
        transition: all 500ms ease;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
    }
    &&:hover div {
        transform: translateX(0%);
    }
    div.active {
        transform: translateX(0%);
    }
`;

export const StyledHomeNavbar = styled.div`
    padding: 0.5rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.3);
    justify-content: space-between;
`

export default StyledNavbar;