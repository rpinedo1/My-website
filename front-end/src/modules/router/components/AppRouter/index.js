import { Routes, Route } from 'react-router-dom';
import { Home } from '../../../homepage';
import { CreateQuestion, Question } from '../../../questions';
import { Resume } from '../../../resume';

export const AppRouter = () => {
    return ( 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-question' element={<CreateQuestion />} />
            <Route path='/question/:questionId' element={<Question />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='*' element={<h2>Page Does Not Exist</h2>}/>
        </Routes>
     );
};