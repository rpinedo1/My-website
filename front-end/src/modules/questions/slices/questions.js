import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    items: {
        1: {
            id: 1,
            text: 'Years of Professional Experience?'
        },
        2: {
            id: 2,
            text: 'What Projects are you interested in working on?',
            upvotes: 1,
            answers: {
                11: {
                    id: 11,
                    text: 'Fullstack opportunities.'
                }
            }
        }
    },
    loading: false
};


export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        // reducers take a 'state' and an 'action'
        addQuestions: (state, action) => {
            const newQuestions = action.payload;
            
            const reducer = (accumulator, question) => {
                accumulator[question.id] = question;
                return accumulator;
            }
            state.items = {
                ...state.items,
                ...newQuestions.reduce(reducer, {}),
            };
        },
        addAnswer: (state, action) => {
            const { questionId, answer } = action.payload;

            const answers = state.items[questionId].answers || {};
            answers[answer.id] = answer;

            state.items[questionId].answers = answers;
        },
        removeQuestion: (state, action) => {
            const questionId = action.payload;

            delete state.items[questionId];
        },
        upvote: (state, action) => {
            const questionId = action.payload;

            let upvotes = state.items[questionId].upvotes || 0;

            upvotes = upvotes + 1;

            state.items[questionId].upvotes = upvotes;
        },
    }

});

export const questionActions = questionsSlice.actions;
export const questions = questionsSlice.reducer;