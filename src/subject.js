import React from 'react'
import { useState } from 'react/cjs/react.production.min'

export default function subject() {

  const [subjectList, setSubjectList] = useState([]);

  return (
    <section>
      {
        subjectList.map(() => {
          return (
            <div>
              
            </div>
          )
        })
      }
    </section>
  )
}
