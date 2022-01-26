import { data } from "../db/data";
import { v4 as uuid } from 'uuid';

export const updateAnswer = {
    method: 'put',
    path: '/question/answer/:id',
    handler: (req, res) => {
        const id = req.params.id;
        const question = data.questions[id];

        const newAnswer = req.body.answer;
        
        const newAnswerId = uuid();

        const answers = question.answers || {};

        answers[newAnswerId] = newAnswer;

        question.answers = answers;

        res.status(200);
        res.send({
            [answers.newAnswerId]: newAnswer
        })


    }
}

export const updateUpvotes = {
    method: 'put',
    path: '/question/upvote/:id',
    handler: (req, res) => {
        const id = req.params.id;
        const question = data.questions[id];

        const upvotes = (question.upvotes || 0) + 1;

        question.upvotes = upvotes;

        res.status(200);
        res.send({
            upvotes: upvotes
        })


    }
}

export const updateQuestion = {
    method: 'put',
    path: '/question/:id',
    handler: (req, res) => {
        const id = req.params.id;
        // make sure to validate the request parameters to make sure that it contains our needed paramenters only
        const questionUpdates = req.body.question;

        const originalQuestion = data.questions[id];

        if (!originalQuestion){
            return res.status(404).send("That question does not exist.")
        }
        
        const updatedQuestion = {
            ...originalQuestion,
            ...questionUpdates,
        };

        data.questions[id] = updatedQuestion;

        res.status(200);
        res.send({
            [id]: updatedQuestion
        })


    }
}