import React from "react";

export const Contact = () => {
  return (
    <section class="py-24 bg-trasnparent max-w-5xl mx-auto" id="contact">
      <div class="container px-4 mx-auto">
        <div class="relative mb-12 mx-auto text-left">
          <div class="relative">
            <span class="inline-block mb-4 text-base text-teal-500 uppercase font-semibold tracking-[.2rem]">
              Contact, Hours, Location
            </span>
            <h2 class="mb-6 text-3xl md:text-5xl lg:text-7xl text-gray-900 font-bold tracking-tight leading-snug md:leading-snug lg:leading-snug">
              How to find us
            </h2>

            <p class="text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
              Contact us by Email or Phone <br />
              growlerzseattle@gmail.com <br />
              (206) 459-2726
            </p>
            <p class="text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose">
              Follow us on Social Media <br />
              Place Holder: Tic Toc, IG, FB Logo
            </p>
          </div>
        </div>
        <div class="text-left mb-12">
          <p class="text-lg md:text-xl text-gray-500 font-medium leading-loose md:leading-loose ">
            We're located at 5269 Rainier Ave. S Seattle WA, 98118
          </p>
          <img
            class="max-w-2xl w-11/12 mx-right mb-6 rounded-md border-4 border-teal-100 mx-auto my-4 md:mx-0"
            src={require("../assets/full-map.png")}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
