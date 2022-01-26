import * as Question from '../db/questionsModel';

export const createQuestion = {
    method: 'post',
    path: '/question',
    handler: async (req, res) => {
        const newQuestion = req.body.question;
        // insertedId is output when something is inserted, it is the Id that is created when something is first inserted into MongoDB
        const { insertedId } = await Question.insertOne(newQuestion);

        // get all the questions including the updated one
        const questions  = await Question.getAll();
        
        // returning all the questions and the insertedId to check that it's in there
        res.status(200)
        res.send({
            questions,
            insertedId,
        })
    },
}