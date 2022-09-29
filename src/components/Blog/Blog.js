import React from "react";

export const Blog = () => {
  return (
    <footer className="min-h-[100vh] bg-[#151515] pt-2">
      <article className="lg:grid lg:grid-cols-2 bg-[#2a2a2a]">
        {/* <!-- Article Image --> */}
        <a href="#" className="hover:opacity-75">
          <img
            className="h-96 w-full"
            src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
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
            While building client-side apps, a team of Facebook developers
            realized that the DOM is slow. So, to make it faster, React
            implements a virtual DOM that is basically a DOM tree representation
            in JavaScript. So when it needs to read or write to the DOM, it will
            use the virtual representation of it. Then the virtual DOM will try
            to find the most efficient way to update the browser’s DOM.
          </a>
          <a
            href="https://www.geeksforgeeks.org/react-js-introduction-working/"
            className="uppercase  hover:text-gray-400"
          >
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </article>
      <article className="lg:grid lg:grid-cols-2 my-4 bg-[#2a2a2a]">
        {/* <!-- Article Image --> */}
        <a href="#" className="hover:opacity-75">
          <img
            className="h-full"
            src="https://1qkeyv41u1op36vgbm47q0i6-wpengine.netdna-ssl.com/wp-content/uploads/2022/04/React-Props-vs-State.png"
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
            What Are The Differences Between States and Props?
          </a>
          <p href="#" className="text-sm pb-3">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-300">
              John Doe
            </a>
            , Published on September 29th, 2022
          </p>
          <a href="#" className="pb-6">
            <div className="px-2 py-1 rounded-lg bg-[#1b1b1b]">
              <table>
                <tbody>
                  <tr>
                    <th>SN.</th>
                    <th>Props</th>
                    <th>State</th>
                  </tr>
                  <tr>
                    <td>
                      <strong>1.</strong>
                    </td>
                    <td>Props are read-only.</td>
                    <td>State changes can be asynchronous.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>2.</strong>
                    </td>
                    <td>Props are immutable.</td>
                    <td>State is mutable.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>3.</strong>
                    </td>
                    <td>
                      Props allow you to pass data from one component to other
                      components as an argument.
                    </td>
                    <td>State holds information about the components.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>4.</strong>
                    </td>
                    <td>Props can be accessed by the child component.</td>
                    <td>State cannot be accessed by child components.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>5.</strong>
                    </td>
                    <td>Props are used to communicate between components.</td>
                    <td>
                      States can be used for rendering dynamic changes with the
                      component.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>6.</strong>
                    </td>
                    <td>Stateless component can have Props.</td>
                    <td>Stateless components cannot have State.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>7.</strong>
                    </td>
                    <td>Props make components reusable.</td>
                    <td>State cannot make components reusable.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>8.</strong>
                    </td>
                    <td>
                      Props are external and controlled by whatever renders the
                      component.
                    </td>
                    <td>
                      The State is internal and controlled by the React
                      Component itself.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </a>
          <a
            href="https://www.javatpoint.com/react-state-vs-props"
            className="uppercase  hover:text-gray-400"
          >
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </article>
      <article className="lg:grid lg:grid-cols-2 bg-[#2a2a2a]">
        {/* <!-- Article Image --> */}
        <a href="#" className="hover:opacity-75">
          <img
            className=""
            src="https://daveceddia.com/images/useEffect-hook.png"
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
            Some Other Use Cases Of useEffect Hook Except Fetching Data
          </a>
          <p href="#" className="text-sm pb-3">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-300">
              John Doe
            </a>
            , Published on September 29th, 2022
          </p>
          <a href="#" className="pb-6">
            let's take a look at some use cases for <code>useEffect</code> other
            than fetching data,
            <ol>
              <li>
                Running on <strong>state change</strong>: validating input field
              </li>
              <li>
                Running on <strong>state change</strong>: live filtering
              </li>
              <li>
                Running on <strong>state change</strong>: trigger animation on
                new array value
              </li>
              <li>
                Running on <strong>props change</strong>: update paragraph list
                on fetched API data update
              </li>
              <li>
                Running on <strong>props change</strong>: updating fetched API
                data to get BTC updated price
              </li>
            </ol>
          </a>
          <a
            href="https://dev.to/colocodes/6-use-cases-of-the-useeffect-reactjs-hook-282o"
            className="uppercase  hover:text-gray-400"
          >
            Continue Reading <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </article>
    </footer>
  );
};
