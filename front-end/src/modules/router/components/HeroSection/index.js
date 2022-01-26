import React, {useState} from 'react';
import Video from '../../../../videos/video.mp4';
import Image from '../../../../images/profile_pic.jpeg'
import { Button } from '../ButtonElement';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroH2,
    HeroP,
    ArrowForward,
    ArrowRight,
    ArrowDownward,
    ArrowDown,
    HeroImg,
    HCol1,
    HCol2,
    HeroWrapper
} from './HeroElements';

export const HeroSection = () => {
    const [hover, setHover] = useState(false)
    
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4' /> */}
                <HeroImg src={Image}></HeroImg>
            </HeroBg>
            <HeroWrapper imgFirst={true}>
                <HCol1> 
                    <HeroContent>
                        <HeroH1>Ramiro Pinedo</HeroH1>
                        <HeroH2>I build things</HeroH2>
                        <HeroP>
                            Hi! I'm a Software Engineer specializing in building exception ditital experiences.
                        </HeroP>
                        <HeroBtnWrapper>
                            <Button 
                            to='projects' 
                            onMouseEnter={onHover} 
                            onMouseLeave={onHover}
                            primary={true}
                            dark={true}
                            fontbig={true}
                            >
                                Check it Out {hover ? <ArrowDownward /> : <ArrowDown />}
                            </Button>
                        </HeroBtnWrapper>
                    </HeroContent>
                </HCol1>
                <HCol2> <h1>Hello</h1></HCol2>
            </HeroWrapper>
        </HeroContainer>
    );
};

