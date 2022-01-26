// special type of Id we need to use when querying Id from mongoDB
import { ObjectId } from 'mongodb';
// importing the collection function from ./connect.js
import { collection } from './connect';


export const insertOne = async (question) => {

    // grabbing the collection we want 
    const questions = await collection('questions');
    

    return await questions.insertOne(question);
};


export const getAll = async () => {
    const questions = await collection('questions');

    // using async await we call find and turn it into an array 
    return await questions.find({}).toArray();
};

export const getOne = async (questionId) => {
    const questions = await collection('questions');
    // find one using the passed in questionId and converting to ObjectId type
    return await questions.findOne({ _id: ObjectId(questionId) });
};

export const deleteOne = async (questionId) => {
    const questions = await collection('questions');
    return await questions.deleteOne({ _id: ObjectId(questionId) });
};

export const updateOne = async (questionId, updates) => {
    const questions = await collection('questions');
    
    // for this one, we first pass in the query/filter ( in this case we query by '_id')
    // then, for that result, we are going to '$set' the 'updates'
    // this '$set' will actually 'MERGE' the passed in 'updates' with the existing 'objects in the DB'
    const result = await questions.updateOne(
        { _id: ObjectId(questionId) },
        {
            $set: updates,
        }
    );
    return result;
}