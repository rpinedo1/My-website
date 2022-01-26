import { Card, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getQuestion, getAnswers } from './selectors';
import { CreateAnswer } from "./CreateAnswer";
export const Answers = ({questionId}) => {

    const question = useSelector(getQuestion(questionId));
    const answers = Object.values(question.answers || {});
    return (
        <>
            <div style={{display:'flex', flexDirection:'column'}}>
                <h2>Answers</h2>
                {
                    answers.length ? null : (
                        <h4>No Answers yet.</h4>
                    )
                }
                {
                    answers.map((answer) => (
                        <Card style={{padding: 12}} key={answer.id}>
                            <h5>{answer.text}</h5>
                        </Card>
                    ))
                }
                <CreateAnswer questionId={questionId} />
            </div>
        </>
    );
};