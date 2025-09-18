import React from "react";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-3xl font-bold mb-6 text-center">My Resume</h2>

      <p className="text-center mb-4 text-gray-600">
        Scroll to view my resume below:
      </p>

      {/* PDF embed */}
      <div className="border rounded-lg overflow-hidden shadow-lg">
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
