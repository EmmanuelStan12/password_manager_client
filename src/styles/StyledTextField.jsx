import styled, { css } from "styled-components";

const StyledTextField = styled.div.attrs(props => ({
    type: 'text'
}))`
    ${props => css`
        padding: 10px 12px;
        border-radius: ${props.br || '10px'};
        display: block;
        display: flex;
        justify-items: center;
        align-items: center;
        height: fit-content;
        width: ${props.width || '100%'} ;
        gap: 4px;
        & > input, & > textarea {
            outline: none;
            border: 0;
            font-size: 14px;
            font-family: "Roboto";
            width: ${props.width || '100%'};
        }
        & svg {
            font-size: 17px;
        }
    `}
`;

export const OutlinedTextField = styled(StyledTextField)`
    border: 1px solid rgba(0, 0, 0, 0.8);
    background: transparent;
`;

export const DefaultTextField = styled(StyledTextField)`
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    background: transparent;
`;