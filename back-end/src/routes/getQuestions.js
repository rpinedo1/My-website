import * as Question from '../db/questionsModel';

// these objects are called route handlers
export const getQuestions = {
    method: 'get',
    path: '/questions',
    handler: async (req, res) => {
        const questions = await Question.getAll();
        
        res.status(200)
        res.send({ questions });
    },
}