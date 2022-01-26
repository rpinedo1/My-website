import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius: 20px;
    /* background: ${({primary}) => (primary === 'true' ? '#BC986A' : '#fff')}; */
    background-color: rgba(0,0,0,0.4);
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? `#fff` : `#111409`)};
    ${({dark}) => (console.log(typeof (dark)))};
    font-size: ${({fontbig}) => (fontbig ? '25px' : '16px')};
    outline: none;
    border: 1px solid #fff;;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#111409')};
        color: ${({primary}) => (primary ? '#111409' : '#fff')};
    }
`