import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if rating is submitted

  // Function to handle rating submission
  const handleSubmitRating = async () => {
    if (selectedStars === 0) {
      alert("Please select a rating before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5175/StarRating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: selectedStars }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Rating submitted successfully!");
        setIsSubmitted(true); // Disable further changes after submission
      } else {
        alert(result.message || "Failed to submit rating.");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
      alert("An error occurred while submitting the rating.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center font-medium space-x-1 mt-5 p-10 bg-white shadow-6xl">
      <h1 className="text-xl text-indigo-600 md:text-4xl">Please Rate Us</h1>
      <div>
        {[...Array(totalStars)].map((_, index) => (
          <button
            key={index}
            className={`text-xl md:text-4xl ${
              index < selectedStars ? "text-yellow-400" : "text-gray-300"
            }`}
            onClick={() => !isSubmitted && setSelectedStars(index + 1)} // Disable clicks after submission
            disabled={isSubmitted} // Disable button after submission
          >
            ★
          </button>
        ))}
      </div>
      {!isSubmitted && (
        <button
          onClick={handleSubmitRating}
          className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Submit Rating
        </button>
      )}
      {isSubmitted && (
        <p className="mt-4 text-green-600">Thank you for your feedback!</p>
      )}
    </div>
  );
};

export default StarRating;