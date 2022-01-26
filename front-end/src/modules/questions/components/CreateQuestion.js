import { Button, Container, TextField } from "@material-ui/core";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { questionActions } from "../slices";
import { Navbar } from "../../router";
export const CreateQuestion = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    
    const [newQuestion, setNewQuestion] = useState('');
    // how we'll dispatch actions to Redux
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const saveQuestion = () => {
        const id = uuid();
        dispatch(questionActions.addQuestions([{
            id,
            text: newQuestion,
        }]));

        setNewQuestion('');
        navigate(`/question/${id}`);
    };

    return (
        <div style={{ marginTop:'80px' }}>
            <Navbar toggle={toggle} noMenu='true'/>
            <Container style={{ display:'flex', flexDirection:'column' }}>
                <h2>Ask a Question</h2>
                <TextField multiline rows={4} value={newQuestion} onChange={(event) => setNewQuestion(event.target.value)} />
                <Button onClick={() => saveQuestion()}>Submit</Button>
            </Container>
        </div>
    );
}