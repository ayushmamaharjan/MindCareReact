import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "../assets/thirdscroll.css";

const stories = [
  {
    id: 1,
    image: "/athlete.jpg",
    date: "May 1, 2024",
    title: "My ability is bigger than my disability...",
    link: "https://www.beyondblue.org.au/mental-health/personal-stories/isis"
  },
  {
    id: 2,
    image: "/worthy.jpg",
    date: "August 9, 2020",
    title: "It's taken most of my life to learn I am worthy of living...",
    link: "https://www.beyondblue.org.au/mental-health/personal-stories/emily"
  },
  {
    id: 3,
    image: "/parenting.jpg",
    date: "July 31, 2022",
    title: "Aiming for the impossible...",
    link: "https://www.beyondblue.org.au/mental-health/personal-stories/craig"
  },
  {
    id: 4,
    image: "/c.jpg",
    date: "October 15, 2023",
    title: "Finding light in the darkest times...",
    link: "#"
  },
  {
    id: 5,
    image: "/Milli.jpg",
    date: "March 5, 2021",
    title: "Every setback is a setup for a comeback...",
    link: "#"
  },
  {
    id: 6,
    image: "/solve.jpg",
    date: "January 8, 2019",
    title: "Turning pain into purpose...",
    link: "#"
  }
];

function StoriesOfHope() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const getVisibleStories = () => {
    let visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(stories[(startIndex + i) % stories.length]);
    }
    return visible;
  };

  return (
    <section className="stories-section">
      <h2 className="stories-title">Stories of HOPE</h2>
      <div className="stories-wrapper">
        <div className="stories-container">
          {getVisibleStories().map((story) => (
            <div key={story.id} className="hope-card">
              <img src={story.image} alt={story.title} className="story-image" />
              <p className="story-date">{story.date}</p>
              <h3 className="story-title">{story.title}</h3>
              <a href={story.link} className="read-blog-btn">Read Blog</a>
            </div>
          ))}
        </div>
        <button className="arrow-btn" onClick={handleNext}>&gt;</button>
      </div>
    </section>
  );
}

export default StoriesOfHope;
