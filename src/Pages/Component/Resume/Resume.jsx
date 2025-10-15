import React from "react";
import Title from "../../Shared/Title";

const Resume = () => {
  return (
    <div className=" px-4 md:px-20 py-10 ">
      <Title
        Subtitle="Scroll to view my resume below"
        title="My Resume"
      ></Title>

      {/* PDF embed */}
      <div className="max-w-5xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="/Ashik-Khan-Mern.pdf" // public folder e PDF thakbe
          width="100%"
          height="800px"
          title="Resume PDF"
        />
      </div>
    </div>
  );
};

export default Resume;
