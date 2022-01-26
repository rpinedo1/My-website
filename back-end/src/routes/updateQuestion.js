import { data } from "../db/data";
import { v4 as uuid } from 'uuid';
import * as Question from "../db/questionsModel";

export const updateQuestion = {
    method: 'put',
    path: '/question/:id',
    handler: async (req, res) => {
        const id = req.params.id;
        // make sure to validate the request parameters to make sure that it contains our needed paramenters only
        const questionUpdates = req.body.question;

        // getting number of matching records we're updating
        const { matchedCount } = await Question.updateOne(id, questionUpdates);
        
        // if no records were updated, we'll receive 0 matching records
        if (matchedCount === 0) {
            return res.status(404).send({
                message: 'That questions does not exist.'
            });
        }

        const questions = await Question.getOne(id);

        res.status(200)
        res.send({
            questions,
        })
    }
}