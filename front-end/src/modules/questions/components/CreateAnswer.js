import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../slices";
import { getQuestion } from "./selectors";
import { v4 as uuid } from 'uuid';
import { Button, Container, TextField } from "@material-ui/core";


export const CreateAnswer = ({ questionId }) => {
    const [newAnswer, setNewAnswer] = useState('');
    const dispatch = useDispatch();
    const question = useSelector(getQuestion(questionId));

    const addAnswer = () => {
        const id = uuid();
        const answer = {
            id,
            text: newAnswer,
        }
        dispatch(questionActions.addAnswer({
            questionId,
            answer,
        }));

        setNewAnswer('');
    }

    return (
        <div style={{ marginTop:'80px' }}>
            <TextField multiline 
                rows={4} 
                value={newAnswer} 
                placeholder='Answer this question'
                onChange={(event) => setNewAnswer(event.target.value || '')} />
            <Button onClick={() => addAnswer()}>Submit</Button>
        </div>
    );
};