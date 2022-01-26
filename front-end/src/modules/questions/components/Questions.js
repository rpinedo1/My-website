import { Navigate, useNavigate } from "react-router-dom";
import { Grid, Card } from '@material-ui/core'
import { Upvote } from "./Upvote";

export const Questions = ({questions}) => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Grid container spacing={2}>
                    {
                        questions.map((question) =>{
                            return (
                                
                                <Grid
                                    item
                                    xs={4}
                                    key={question.id}
                                    style={{ cursor:'pointer' }}
                                    onClick={() => navigate(`/question/${question.id}`)}
                                    >
                                    <Card style={{ padding: 12, display: 'flex', flexDirection: "row"}}>
                                        {question.text}
                                        Upvotes:
                                        <Upvote questionId={question.id}/>
                                    </Card>
                                </Grid>
                            );
                        })
                    }
                </Grid>
            </div>
        </>
    );
};