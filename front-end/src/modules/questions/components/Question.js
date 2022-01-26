import { Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { questions } from "../slices/questions";
import { Navbar } from "../../router";
import { useState } from "react";
import { Answers } from "./Answers";
import { Upvote } from "./Upvote";
// we need to use currying or 'function that returns another function' if we want to pass in a parameter to the useSelector
// since useSelector passes in the 'state'
// use selector is how we get data from the state into our component
const getQuestion = (questionId) => (state) => {
    return state.questions.items[questionId];
}

export const Question = () => {
    // grabbing url parameters
    const params = useParams();
    const { questionId } = params;
    const question = useSelector(getQuestion(questionId));

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div style={{ marginTop:'80px' }}>
            <Navbar toggle={toggle} noMenu='true'/>
            <Container>
                <h1>{question.text}</h1>
                <hr></hr>
                <Upvote questionId={question.id} />
                <Answers questionId={question.id} />
            </Container>
        </div>
        
    );
}