import { Link } from "react-router-dom";
const Sidenav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-3">
      <h1 className="text-white font-bold ml-5">
        <i className="ri-tv-fill text-blue-500 text-2xl mr-2"></i>
        <Link to={"/"} className="text-2xl ">
          TMDB
        </Link>
      </h1>
      <nav className="flex flex-col gap-2">
        <h1 className="text-white font-semibold text-xl mt-5 mb-2 p-5">
          New Feeds
        </h1>
        <Link
          to="/trending"
          className="text-zinc-300 text-xl hover:bg-[#6556CD] p-3 hover:text-white rounded-md duration-300"
        >
          <i className="ri-fire-fill mr-2"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="text-zinc-300 text-xl hover:bg-[#6556CD] p-3 hover:text-white rounded-md duration-300"
        >
          <i className="ri-bard-fill mr-2"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="text-zinc-300 text-xl hover:bg-[#6556CD] p-3 hover:text-white rounded-md duration-300"
        >
          <i className="ri-movie-2-fill mr-2"></i>
          Movies
        </Link>
        <Link
          to="/tv"
          className="text-zinc-300 text-xl hover:bg-[#6556CD] p-3 hover:text-white rounded-md duration-300"
        >
          <i className="ri-tv-2-fill mr-2"></i>
          Tv Shows
        </Link>
        <Link
          to="/person"
          className="text-zinc-300 text-xl hover:bg-[#6556CD] mb-3 p-3 hover:text-white rounded-md duration-300"
        >
          <i className="ri-team-fill mr-2"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col gap-3">
        <h1 className="text-white font-semibold text-xl mt-2 mb-2 p-5">
          Website Information
        </h1>
        <Link className="text-zinc-300 text-xl hover:bg-[#6556CD] p-3 hover:text-white rounded-md duration-300">
          <i className="ri-information-fill mr-2"></i>
          About GJUDB
        </Link>
        <Link className="text-zinc-300 text-xl hover:bg-[#6556CD] p-3 hover:text-white rounded-md duration-300">
          <i className="ri-phone-fill mr-2"></i>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default Sidenav;
