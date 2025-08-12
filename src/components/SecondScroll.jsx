import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../assets/secondscroll.css';

const issues = [
  { name: 'Depression', img: '/depression.jpg' },
  { name: 'Stress', img: '/stress.jpg' },
  { name: 'Anxiety', img: '/anxiety.jpg' },
  { name: 'Mood swings', img: '/mood swing.jpg' },
  { name: 'ADHD', img: '/adhd.jpg' },
  { name: 'Bipolar Disorder', img: '/stress.jpg' },
];

function SecondScroll() {
  const [showAll, setShowAll] = useState(false);
  const displayedIssues = showAll ? issues : issues.slice(0, 4);

// const MentalHealthIssues = () => {
  return (
    <div className="mental-health-section">
      <div className="mental-health-header">
        <h2>Mental Health Issues</h2>
        <button 
          className="view-all" 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>

      <div className="issue-cards">
        {displayedIssues.map((issue, index) => (
          <div className="issue-card" key={index}>
            <img src={issue.img} alt={issue.name} />
            <button>{issue.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondScroll;
