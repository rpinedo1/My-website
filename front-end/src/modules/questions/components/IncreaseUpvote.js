// import { Card } from "@material-ui/core";
// import { useDispatch, useSelector } from "react-redux";
// import { Upvote } from "./Upvote";

// const getQuestion = (questionId) => (state) => {
//     return state.questions.items[questionId];
// }


// export const IncreaseUpvote = ({questionId}) => {
//     const question = useSelector(getQuestion(questionId));
//     const upvotes = question.upvotes || 0;
//     console.log(upvotes)
//     return (
//         <div style={{display:'flex', flexDirection:'column'}}>
//             <h2>Upvotes</h2>
//             <Card style={{padding: 12}}>
//                 {upvotes}
//             </Card>
//             <Upvote questionId={questionId}/>
//         </div>
//     );

// }



import { useDispatch, useSelector } from "react-redux";
import { questionActions } from "../slices";
import { Button } from "@material-ui/core";

const getQuestion = (questionId) => (state) => {
    return state.questions.items[questionId];
}


export const IncreaseUpvote = ({questionId}) => {
    const question = useSelector(getQuestion(questionId));

    const dispatch = useDispatch();

    const increaseUpvote = () => {
        dispatch(questionActions.upvote(questionId));
    }

    return (
        <Button onClick={() => increaseUpvote()}>Upvote</Button>
    );

}