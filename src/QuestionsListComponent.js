import axios from 'axios';
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import QuestionSetComponent from './QuestionSetComponent';
import "./questionlist.css";

export default function QuestionsListComponent() {

    const category = useParams();
    const [questions, setQuestions] = React.useState([]);
    const [score, setScore] = React.useState(0);
    let navigation = useNavigate();

    React.useEffect(function () {
        axios.get(`/api/1.0/quiz/${category.category}`).then((response) => {
            console.log(response.data);
            setQuestions(response.data.output);
        }).catch(error => {
            alert(error.message)
        })
    }, [category]);

    function calculateScore() {
        localStorage.setItem('score', JSON.stringify(score));
        navigation('../score');
    }

    return (
        <div className='question-container'>
            <h1>SET A TIMER OF 10 Minutes, Quiz expires</h1>
            {
            questions.map((data) => {
                return <QuestionSetComponent getScore={(val) => setScore(val + score)} data={data} />
            })
        }

        <button onClick={calculateScore} className='submit-button'>Submit</button>
        </div>
    )
}
