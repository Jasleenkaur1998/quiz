import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginComponent from './LoginComponent';
import SignupComponent from './SignupComponent';

export default function App() {

    return (
        <div>
            <Routes>
                <Route path='/' element={<LoginComponent />} />
                <Route path='/createAccount' element={<SignupComponent />} />
                
            </Routes>
        </div>  
    )
}