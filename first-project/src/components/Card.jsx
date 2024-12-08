import React from 'react';

function Card() {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img 
        className="w-full h-48 object-cover" 
        src="https://via.placeholder.com/400x300" 
        alt="Dummy Image" 
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">This is a dummy description. You can replace this text with your own content, such as a paragraph or an overview of the card.</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Card;
