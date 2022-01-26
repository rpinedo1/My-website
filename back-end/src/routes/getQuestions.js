import { data } from "../db/data";

// this is a way to export the route as an objecty to keep from clutering the main index.js file
export const getQuestions = {
    method: 'get',
    path: '/questions',
    handler: (req, res) => {
        res.status(200).send(data.questions);
    },
}