import React, { useState, useEffect } from "react";

const Skills = () => {
  return (
    <div className="bg-gray-50 ">
      <div class="relative max-w-7xl mx-auto sm:px-6 lg:pb-20 lg:pt-32 lg:px-8">
  <h1 class="mb-20 text-5xl text-center font-bold text-slate-950">SKILLS AND EXPERIENCES</h1>
  <div class="relative space-y-8">
    <div class="absolute inset-1 ml-5 -translate-x-px md:mx-auto md:translate-x-0 h-[670px] w-0.5 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
    

    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#871CF6] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <p class="fill-current text-2xl">1</p>
      </div>
      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow" data-aos="fade-down">
        <div class="flex items-center justify-between space-x-2 mb-3" >
          <div class="font-bold text-2xl text-slate-900">HTML</div>
          <img class="" width="40"  height="12" src="/public/html.png" alt="" />
        </div>
        <div class="text-slate-500">Create structured, semantic, and accessible HTML code to build the foundation of your website.</div>
      </div>
    </div>

    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ">
    <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#871CF6] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
    <p class="fill-current text-2xl">2</p>
      </div>
      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow" data-aos="fade-left">
        <div class="flex items-center justify-between space-x-2 mb-3">
        <div class="font-bold text-2xl text-slate-900">CSS</div>
          <img class="" width="40"  height="12" src="/public/css.png" alt="" />
        </div>
        <div class="text-slate-500"> Specialize in crafting visually appealing and responsive designs using CSS to enhance your website's user experience.</div>
      </div>
    </div>

    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ">
    <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#871CF6] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
    <p class="fill-current text-2xl">3</p>
      </div>
      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow" data-aos="fade-right">
        <div class="flex items-center justify-between space-x-2 mb-1">
          <div class="font-bold text-2xl text-slate-900">JavaScript</div>
          <img class="" width="40"  height="12" src="/public/java-script.png" alt="" />
        </div>
        <div class="text-slate-500">Develop interactive and dynamic web applications with JavaScript to engage your audience effectively.</div>
      </div>
    </div>

    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ">
    <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#871CF6] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
    <p class="fill-current text-2xl">4</p>
      </div>
      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow" data-aos="fade-left">
        <div class="flex items-center justify-between space-x-2 mb-1">
          <div class="font-bold text-2xl text-slate-900">Bootstrap</div>
          <img class="" width="40"  height="12" src="/public/bootstrap.png" alt="" />
        </div>
        <div class="text-slate-500">Quickly build responsive, mobile-first websites that look great on any device.</div>
      </div>
    </div>

    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
    <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#871CF6] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
    <p class="fill-current text-2xl">5</p>
      </div>
      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow" data-aos="fade-right">
        <div class="flex items-center justify-between space-x-2 mb-1">
          <div class="font-bold text-2xl text-slate-900">React</div>
          <img class="" width="40"  height="12" src="/public/react.png" alt="" />

        </div>
        <div class="text-slate-500">Create high-performance, user-friendly interfaces with React, ideal for complex web applications</div>
      </div>
    </div>


    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
    <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#871CF6] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
    <p class="fill-current text-2xl">6</p>
      </div>
      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow" data-aos="fade-left">
        <div class="flex items-center justify-between space-x-2 mb-1">
          <div class="font-bold text-2xl text-slate-900">Tailwind</div>
          <img class="" width="40"  height="12" src="/public/tailwind.png" alt="" />
        </div>
        <div class="text-slate-500">Deliver streamlined and efficient front-end designs using Tailwind CSS to enhance your web project</div>
      </div>
    </div>


    <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
      <div class="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#871CF6] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
      <p class="fill-current text-2xl">7</p>
      </div>
      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow" data-aos="fade-up">
        <div class="flex items-center justify-between space-x-2 mb-1">
          <div class="font-bold text-2xl text-slate-900">WordPress</div>
          <img class="" width="40"  height="12" src="/public/wordpress.png" alt="" />
        </div>
        <div class="text-slate-500">Design and manage customized WordPress sites to meet your business needs efficiently and effectively.</div>
      </div>
    </div>


  </div>
</div>

    </div>
  );
};
export default Skills;
