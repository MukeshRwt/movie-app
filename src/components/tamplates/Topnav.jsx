import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import { useEffect } from "react";
import foundno from "/foundno.jpg";
const Topnav = () => {
  const [query, setquery] = useState("");
  const [search, setsearch] = useState([]);
  const getsearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearch(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(query);
  useEffect(() => {
    getsearch();
  }, [query]);
  return (
    <>
      <div className="w-[80%] h-[10vh] z-30 relative flex justify-center  mx-auto items-center ">
        <i className="text-3xl ri-search-line text-zinc-200"></i>
        <input
          type="text"
          onChange={(e) => {
            setquery(e.target.value);
          }}
          value={query}
          className=" text-white w-[50%] mx-5 p-3 outline-none border-2 rounded-md bg-transparent"
          placeholder="Search"
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="cursor-pointer  right-0 text-3xl ri-close-line text-zinc-200"
          ></i>
        )}
        <div className="w-[50%] max-h-[50vh] bg-zinc-200 absolute top-[100%] left-[5%] overflow-auto">
          {search.map((s, i) => (
            <Link
              to={`${s.media_type}/details/${s.id}`}
              key={i}
              className="hover:text-zinc-900 duration-300 rounded-lg hover:bg-zinc-300 text-zinc-600  w-[100%] p-5 font-semibold items-center flex justify-start border-b-2 border-zinc-100"
            >
              <img
                className="w-[10vh] h-[10vh] object-cover shadow-lg rounded mr-5"
                src={
                  s.backdrop_path || s.profile_path
                    ? `https://image.tmdb.org/t/p/original/${
                        s.backdrop_path || s.profile_path
                      }`
                    : foundno
                }
              />
              <span>
                {s.name || s.title || s.original_name || s.original_title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Topnav;
