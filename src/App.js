import "./App.css";
import * as React from "react";
import { Routes, Route,  useLocation } from "react-router-dom";
import EventList from "./components/eventList";
import EventDetial from "./components/eventDetial";
import EventSignUp from "./components/eventSignUp";
import NoMatch from "./components/noMatch";

import { Link } from "react-router-dom";
function App() {
  let location = useLocation();

  // The `backgroundLocation` state is the location that we were at when one of
  // the gallery links was clicked. If it's there, use it as the location for
  // the <Routes> so we show the gallery in the background, behind the modal.
  let state = location.state;

  return (
    <div className="App">
      <header>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-vb">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="https://vegro.nl/" className="flex items-center">
              <img
                src="/images/logo.webp"
                className="mr-3 h-6 sm:h-9 text-white"
                alt="Vegro"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Vegro events
              </span>
            </a>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                <Link className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-vegrogreen md:p-0 dark:text-white font-bold text-xl" to="/">
                 all events
                 </Link>
              
                </li>
                <li>
                
             
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="container pt-16 sm:pt-10 xl:pt-0 mt-10 sm:mt-20 lg:mt-20 xl:mt-52 px-6 lg:px-10 mb-auto mx-auto flex flex-col items-left justify-center">
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/" element={<EventList></EventList>}></Route>
       
            <Route path="/event/:id" element={<EventDetial />} />
          <Route exact path="/signup" element={<EventSignUp/>}/>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
