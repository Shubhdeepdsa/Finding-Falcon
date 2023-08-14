import React from 'react';
import './SucessFailPage.css'; 
const SucessPage = ({ result }) => {
  console.log('This got Called')
  return (
    <div className="page success-page">
      <div className="message-container">
        <h2>Success! Falcon Found</h2>
        <p>Congratulations! You successfully found the Falcon.</p>
        <p>Falcon was found on {result[0]?.planet_name}.</p>
      </div>
    </div>
  );
};
const FailPage = ({ result }) => {
  console.log('This got Called')
  return (
    <div className="page fail-page">
      <div className="message-container">
        <h2>Failed to Find Falcon</h2>
        <p>Unfortunately, Falcon was not found this time.</p>
        <p>Try again with different strategies.</p>
      </div>
    </div>
  );
};
export { SucessPage, FailPage };
