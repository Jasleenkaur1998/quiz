import React from 'react'
import { Link } from 'react-router-dom';
import './subject.css';

export default function SubjectComponent() {

  const subjectList = [
    {
      title: "Science",
      path: "/science"
    },
    {
      title: "General",
      path: "/general"
    }
  ]

  return (
    <section>
     <div className="subject-outercontainer">
     <h1>CHOOSE YOUR SUBJECT</h1>
      {
        subjectList.map((data) => {
          return (
            <div className='subject-section'>
              <Link className='subject-action' to={data.path}>{data.title}</Link>
            </div>
          )
        })
      }

      <Link to="../scoreboard">View ScoreBoard</Link>
     </div>
    </section>
  )
}
