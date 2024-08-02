import React, { useEffect, useState } from "react";

const Work = () => {
  const [putdata, setData] = useState([]);

  useEffect(() => {
    fetch("/data/work.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the structure of the data
        setData(data.data || data); // Adjust if necessary based on actual structure
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(putdata);

  return (
    <div className="overflow-hidden bg-gray-50 md:pt-0 sm:pt-16">
      <h1 className="mb-20 mt-20 text-5xl text-center font-bold text-slate-950">
        WORK PORTFOLIO
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-5 p-4">
        {putdata.map((item, index) => (
          <div
            key={index}
            className="group cursor-pointer relative"
          >
            <img
              src={item.image}
              alt={`Image ${index + 1}`} // Use index to ensure unique alt text
              className="w-full object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 rounded-lg scale-105 transition-opacity z-10"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <div className="grid place-items-center mb-2"></div>
              <a
                className="bg-white text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                href="https://noman40046.github.io/javascript-jquary-project-6/"
                target="_blank"
                rel="noopener noreferrer" // Add rel attribute for security
              >
                Visit Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
