import * as Question from '../db/questionsModel';

export const deleteQuestion = {
    method: 'delete',
    path: '/question/:id',
    handler: async (req, res) => {
        const id = req.params.id;
        const result = await Question.deleteOne(id);
      
        res.status(200)
        res.send({
            deleted: true,
        })       

    }
}