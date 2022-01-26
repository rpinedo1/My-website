import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward, MdKeyboardArrowDown, MdArrowDownward} from 'react-icons/md'

// export const HeroContainer = styled.div`
//     background: #0c0c0c;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 30px;
//     /* height: 100%; */
//     height: 100vh;
//     position: relative;
//     z-index: 1;
//     //margin-top: 80px;

//     :before {
//         content: '';
//         position: absolute;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         background: linear-gradient(
//             180deg, 
//             rgba(0,0,0,0.0) 0%, 
//             rgba(10,10,10,0.3) 70%
//         );
//         z-index: 2;
//     }
// `
export const HeroContainer = styled.div`
    display: grid;
    z-index: 1;
    /* height: 860px; */
    height: 100vh;
    width: 100%;
    max-width: 1100px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 24px;
    justify-content: center;
`


export const HeroWrapper = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgFirst}) => imgFirst ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width:768px) {
        grid-template-areas: ${({imgFirst}) => imgFirst ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`

export const HCol1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

`

export const HCol2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    opacity: 50%;
`

export const HeroImg = styled.img`
    width: 100%;
    height: 100vh;
    /* margin: 0 0 10px 0; */
    object-fit:cover;
    padding-right: 0;
    -o-object-fit: cover;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width:1200px;
    position: absolute;
    padding: 8px 24px;
    /* padding-left: 200px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-top: 200px; */
    /* padding-right: 500px; */

    @media screen and (max-width: 960px) {
        padding-right: 24px;
    }


`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroH2 = styled.h2`
    color: #fff;
    font-size: 38px;
    text-align: center;
    opacity: 70%;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowDownward = styled(MdArrowDownward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowDown = styled(MdKeyboardArrowDown)`
    margin-left: 8px;
    font-size: 20px;
`
