import { data } from "../db/data";

export const deleteQuestion = {
    method: 'delete',
    path: '/question/:id',
    handler: (req, res) => {
        const id = req.params.id;

        if (!data.questions[id]){
            return res.status(404).send("That question does not exist.")
        }

        delete data.questions[id];
        
        res.status(200)
        res.send({
            [id]: data.questions[id],
        })       

    }
}