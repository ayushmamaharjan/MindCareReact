import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/fourthscroll.css";

const  stories  = [
  { 
    image: "/Milli.jpg",
    date: "March 20, 2020", 
    topic: "I thought I was dying” – Milli describes what a panic attack feels like..",  
    link: "https://www.beyondblue.org.au/mental-health/personal-stories/milli" 
  },
  { 
    image: "/doctor.jpg",
    date: "June 1, 2021", 
    topic: "I’m a doctor, I shouldn’t get sick” – Geoff’s experience of work stress and depression", 
    link: "https://www.beyondblue.org.au/mental-health/personal-stories/geoff" 
  },
  { 
    image: "/Richard.jpg",
    date: "Jan 8, 2024", 
    topic: "When depression and alcohol meet - Richard's story..", 
    link: "https://www.beyondblue.org.au/mental-health/personal-stories/richard" 
  },
  { 
    image: "/Liam.jpg",
    date: "Feb 15, 2024", 
    topic: "Finding light in the darkest times...", 
    link: "https://www.beyondblue.org.au/mental-health/personal-stories/liam" 
  },
  { 
    image: "/every.jpg",
    date: "May 2, 2024", 
    topic: "Every setback is a setup for a comeback...", 
    link: "https://www.beyondblue.org.au/mental-health/personal-stories/geoff" 
  },
];

function PersonalStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const nextSlide = () => {
    if (currentIndex < stories.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="personal-stories-container">
      <h2 className="personal-stories-title">Personal Stories</h2>
      <div className="carousel-wrapper">
        <button className="arrow left" onClick={prevSlide}>&lt;</button>
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${currentIndex * (300 + 20)}px)` }} 
          >
            {stories.map((story, index) => (
              <div className="story-card" key={index}>
                <img src={story.image}  alt={story.topic} className="story-image"/>
                <p className="story-date">{story.date}</p>
                <p className="story-topic">{story.topic}</p>
                <a href={story.link} className="read-more-btn">Read More</a>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right" onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
}

export default PersonalStories;