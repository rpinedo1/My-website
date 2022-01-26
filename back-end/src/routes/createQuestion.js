import { data } from "../db/data";
import { v4 as uuid } from "uuid";

export const createQuestion = {
    method: 'post',
    path: '/questions',
    handler: (req, res) => {
        const newQuestion = req.body.question;
        newQuestion.id = uuid();

        data.questions[question.id] = newQuestion;
        res.status(200).send({
            questions: {
                [newQuestion.id]: newQuestion
            }
        })
    },
}