import React, { useState, useEffect } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {

    const fetchSkills = async () => {
      const response = await fetch("/data/skill.json"); 
      const data = await response.json();
      setSkills(data.skills);
    };

    fetchSkills();
  }, []);

  return (
    <div className="bg-gray-50 ">
      <div className="relative max-w-7xl mx-auto sm:px-6 lg:pb-20 lg:pt-32 lg:px-8">
        <h1 className="mb-20 text-5xl text-center font-bold text-slate-950">
          SKILLS AND EXPERIENCES
        </h1>
        <div className="relative space-y-8">
          <div className="absolute inset-1 ml-5 -translate-x-px md:mx-auto md:translate-x-0 h-[1870px] w-0.5 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`relative flex items-center  justify-between md:justify-normal md:odd:flex-row-reverse group ${index % 2 === 0 ? "md:group-odd:flex-row-reverse" : "md:group-even:flex-row"}`}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#871cf6] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                <p className="fill-current text-2xl">{index + 1}</p>
              </div>
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border shadow-custom${skill.id}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <div className="flex items-center justify-between space-x-2 mb-3">
                  <div className="font-bold text-2xl text-slate-900 number">
                    <span>{skill.title}</span>
                  </div>
                  <div className="shadow-lg p-5 rounded-full">
                    <img
                      className="rotate"
                      width="45"
                      height="12"
                      src={skill.icon}
                      alt={skill.title}
                    />
                  </div>
                </div>
                <div className="text-slate-500 text-xl mt-7 mb-7">
                  {skill.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
