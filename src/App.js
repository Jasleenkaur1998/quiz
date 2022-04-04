import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import QuestionsListComponent from './QuestionsListComponent';
import SignupComponent from './SignupComponent';
import SubjectComponent from './SubjectComponent';

export default function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginComponent />} />
                <Route path='/createAccount' element={<SignupComponent />} />
                <Route path='/dashboard' element={<SubjectComponent />} />
                <Route path='/:category' element={ <QuestionsListComponent />} />
            </Routes>
        </div>  
    )
}