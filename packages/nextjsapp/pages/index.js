import React, { useState } from "react";
import { MyGrid } from "component-library-react";

export default function Home() {
  const [slides, setSlides] = useState([
    { id: "1", text: "Slide 1" },
    { id: "2", text: "Slide 2" },
    { id: "3", text: "Slide 3" },
    { id: "4", text: "Slide 4" },
    { id: "5", text: "Slide 5" },
  ]);

  const handleRemoveFirstSlide = () => {
    console.log("first slide removed");
    setSlides(slides.slice(1));
  };

  return (
    <>
      <button onClick={handleRemoveFirstSlide}>Remove first slide to make the crash</button>
      <MyGrid>
        {slides.map(({ id, text }) => (
          <span key={id}>{text}</span>
        ))}
      </MyGrid>
    </>
  );
}
