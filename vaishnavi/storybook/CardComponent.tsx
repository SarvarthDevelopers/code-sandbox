import React from 'react';
import './CardComponent.css';

interface CardProps {
  title: string;
  subtitle: string;
  numQuestionsPlaceholder?: string;
  questionTypePlaceholder?: string;
  focusAreaPlaceholder?: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  subtitle,
  numQuestionsPlaceholder,
  questionTypePlaceholder,
  focusAreaPlaceholder
}) => {
  return (
    <div className='baground'>  
    <div className="quiz-card">
      <h2>{title}</h2>
      <p className="subtitle">{subtitle}</p>
      <div className="quiz-row">
        <div className="quiz-input">
          <label>No. of questions</label>
          <input type="text" placeholder={numQuestionsPlaceholder || " "} />
        </div>
        <div className="quiz-input">
          <label>Question Type</label>
          <input type="text" placeholder={questionTypePlaceholder || " "} />
        </div>
      </div>
      <div className="quiz-input-full">
        <label>Focus Area/AI Prompt</label>
        <input type="text" placeholder={focusAreaPlaceholder || " "} />
      </div>
    </div>
    </div>
  );
};

export default CardComponent;