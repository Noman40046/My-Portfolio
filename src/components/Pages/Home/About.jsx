import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: "800" });
  }, []);
  return (
    <div>
      <section class=" overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 ">
        <div class="px-4 mx-auto sm:px-6 lg:pt-10  lg:px-8 max-w-7xl">
          <div class="grid items-center grid-cols-1 md:grid-cols-2">
            <div >
              <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl mb-4">
                Hey <span className="shake-logo">👋</span>               </h2>
              <h2 class="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-4xl">
                I'm a Passionate{" "}
                <span className="text-[#B319FA]"> Web Designer</span> and
                <span className="text-[#B319FA]"> Developer</span> .
              </h2>
              <p class="max-w-lg lg:mt-5 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
                As a front-end web developer, I create user-facing websites and
                web applications. I'm skilled in HTML, CSS, SCSS, Bootstrap,
                JavaScript, jQuery, React, Tailwind CSS, and WordPress. I have a
                strong grasp of responsive design and web accessibility. I stay
                up-to-date with the latest technologies and trends in web
                development.
              </p>

              <h2 class="text-3xl font-bold leading-tight text-black dark:text-white mt-5 mb-7 sm:text-4xl lg:text-4xl">
              My Interests
              </h2>
              <div className="all-interest flex gap-8">
                <div className="first-interest flex-col flex items-center">
                  <img className="w-12" src="/public/robotic-hand.png" alt="" />
                  <a className="interest-names text-2xl  font-semibold ml-2">
                    Technology
                  </a>
                </div>
                <div className="first-interest flex flex-col items-center">
                <img className="w-12" src="/public/football-players.png" alt="" />
                  <a className="interest-names text-2xl  font-semibold ml-2">
                    Football
                  </a>
                </div>
                <div className="first-interest flex flex-col items-center">
                <img className="w-12" src="/public/luggage.png" alt="" />
                  <a className="interest-names text-2xl  font-semibold ml-2">
                    Travel
                  </a>
                </div>
                <div className="first-interest flex flex-col items-center">
                <img className="w-12" src="/public/cinema.png" alt="" />
                  <a className="interest-names text-2xl  font-semibold ml-2">
                    Movies
                  </a>
                </div>
              </div>
            </div>

            <div class="relative" data-aos="fade-left">
              <img
                class="absolute inset-x-0 bottom-0 -mb-40  -translate-x-1/2 left-1/2"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                alt=""
              />

              <img
                class="relative w-full xl:max-w-lg xl:mx-auto -mt-40 3xl:origin-top 2xl:scale-150"
                src="/me.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
