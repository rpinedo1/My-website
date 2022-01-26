import React, {useState} from 'react';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../router/components/InfoSection/Data';
import { Navbar, HeroSection, InfoSection } from '../router';
import { questions } from '../questions/slices/questions';
import { useSelector } from 'react-redux';
import { Questions } from '../questions';


const getQuestions = (state) => {
    // returning the object fileds as a list 
    return Object.values(state.questions.items);
}


export const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    

    const questions = useSelector(getQuestions);
    console.log(questions);

    return (
        <>
            {/* <Sidebar isOpen={isOpen} toggle={toggle}/> */}
            <Navbar toggle={toggle}/>
            <HeroSection />
            
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Questions questions={questions}/>
            {/* <Footer /> */}
        </>
    );
};