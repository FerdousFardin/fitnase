import React from "react";

export const Blog = () => {
  return (
    <footer className="min-h-[100vh] bg-[#151515] pt-2">
      <article className="flex   bg-[#2a2a2a]">
        {/* <!-- Article Image --> */}
        <a href="#" className="hover:opacity-75">
          <img
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            alt=""
          />
        </a>
        <div className="text-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            React, Front-End
          </a>
          <a href="#" className="text-3xl font-bold hover:text-gray-300 pb-4">
            How Does React Work?
          </a>
          <p href="#" className="text-sm pb-3">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-300">
              John Doe
            </a>
            , Published on September 29th, 2022
          </p>
          <a href="#" className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </a>
          <a href="#" className="uppercase  hover:text-gray-400">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </article>
      <article className="flex my-4  bg-[#2a2a2a]">
        {/* <!-- Article Image --> */}
        <a href="#" className="hover:opacity-75">
          <img
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            alt=""
          />
        </a>
        <div className="text-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            React, Front-End
          </a>
          <a href="#" className="text-3xl font-bold hover:text-gray-300 pb-4">
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </a>
          <p href="#" className="text-sm pb-3">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-300">
              David Grzyb
            </a>
            , Published on January 12th, 2020
          </p>
          <a href="#" className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </a>
          <a href="#" className="uppercase  hover:text-gray-400">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </article>
      <article className="flex   bg-[#2a2a2a]">
        {/* <!-- Article Image --> */}
        <a href="#" className="hover:opacity-75">
          <img
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=2"
            alt=""
          />
        </a>
        <div className="text-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            React, Front-End
          </a>
          <a href="#" className="text-3xl font-bold hover:text-gray-300 pb-4">
            Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
          </a>
          <p href="#" className="text-sm pb-3">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-300">
              David Grzyb
            </a>
            , Published on January 12th, 2020
          </p>
          <a href="#" className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
            iaculis dui porta volutpat. In sit amet posuere magna..
          </a>
          <a href="#" className="uppercase  hover:text-gray-400">
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </article>
    </footer>
  );
};
