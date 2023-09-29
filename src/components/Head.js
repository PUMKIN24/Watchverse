import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => { 
    //For Search box binding
    const [searchQuery, setSearchQuery] = useState("");
    //for suggestions
    const [suggestions, setSuggestions] = useState([]);
    //for focus and blur
    const [showSuggestions, setShowSuggestions] = useState(false);
    //Reading cache
    const searchCache = useSelector((store) => store.search);
 

    const dispatch = useDispatch()


  //Debouncing in useEffect
  useEffect(() => {
    //Make an API call after every key press
    //but if the diff btw 2 key press is <200ms - decline the call
    //optimizing search api calls
    const timer = setTimeout(() => {
        if (searchCache[searchQuery]) {
          setSuggestions(searchCache[searchQuery]);
        } else {
          //Make an API call and update in cache
          getSearchSuggestions();
        }
      }, 200);
  
      //At every key press it tries to clear timer
      return () => {
        clearTimeout(timer);
      };
    }, [searchQuery]);


    //Making the api call
    const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //Update in cache after making API call
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      }));};


    //Hamburger menu
    const handleToggleMenu = () => {
    dispatch(toggleMenu());
    };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 cursor-pointer">
        {/* Hamburger Icon */}
        <img
          onClick={() => handleToggleMenu()}
          className="h-8"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="menu"
        />

        {/* Youtube logo */}
        <a href="/">
          <img
            className="h-8 mx-2"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png"
            alt="youtube"
          />
        </a>
      </div>

      {/* Search and text box */}
      <div className="col-span-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 px-5 py-2  rounded-l-full "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed bg-white  w-[21rem] shadow-lg rounded-lg ">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="flex py-2 hover:bg-gray-200 ">
                  <img
                    className="w-5 h-5 mx-2 "
                    src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3432420/magnifier-icon-md.png"
                    alt="search"
                  />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* UserIcon */}
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
