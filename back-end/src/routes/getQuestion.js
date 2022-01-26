import { data } from "../db/data";


export const getQuestion = {
    method: 'get',
    path: '/question/:id',
    handler: (req, res) => {
        const id = req.params.id;

        if (!data.questions[id]){
            return res.status(404).send(`Question Not Found`);
        }
        
        res.status(200)
        res.send({
            [id] : data.questions[id]
        })

    }
}