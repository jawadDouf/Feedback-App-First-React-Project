import React from 'react'
import { useState } from 'react';

function FeedbackStats(props) {
   const [str,setStr] =  useState('Jamal');
   const n = props.feedback.reduce((totalCurr,feed) => {
    return feed.rating + totalCurr;
  },0) / props.feedback.length.toFixed(1)
  return (
    <div className='feedback-stats'>
      <h4>{props.feedback.length} Reviews</h4>
      <h4>Average Rating: { n }</h4> 
    </div>
   
  )
}

export default FeedbackStats