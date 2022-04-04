import React from 'react'

export default function ScoreScreenComponent() {

  const [score, setScore] = React.useState("");

  React.useEffect(function() {
      const savedScore = localStorage.getItem('score');
      setScore(savedScore);
  })
  return (
    <div>
        YOUR SCORE IS 
        {
            score
        }
    </div>
  )
}
