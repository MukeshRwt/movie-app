import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadtv, removetv } from "../store/actions/TvAction";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./tamplates/Loading";
import { Link } from "react-router-dom";
import BottomCard from './tamplates/BottomCard'
const TvDetails = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  console.log(info);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removetv);
    };
  }, [id])
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
      className="relative w-screen h-[190vh] px-[5%] overflow-x-hidden"
    >
      <nav className="h-[10vh]  items-center w-full text-zinc-100 flex gap-8 text-xl">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></i>
        <a target="_blank" href={info.details.homepage}>
          <i className="hover:text-[#6556CD] ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          <i className="">imdb</i>
        </a>
      </nav>

      <div className="w-full flex  ">
        <img
          className="object-cover h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.poste_path ||  info.details.backdrop_path
          }`}
          alt=""
        />
        <div className="content ml-[5%] ">
          <h1 className="text-white text-5xl font-bold">{info.details.name || info.details.original_name || info.details.original_title}
            <small className="text-xl font-semibold text-zinc-300">({info.details.first_air_date.split("-")[0]})</small>
          </h1>

          <div className="flex mt-3 mb-5  text-white items-center  gap-x-5 gap-y-10">
          <span className=' text-white w-[9vh] text-xl text-center mt-3 font-semibold h-[9vh] rounded-[50%] bg-yellow-500 flex items-center justify-center'>
            {(info.details.vote_average *10).toFixed(2) } <sub>%</sub>
            </span>
            <h1 className="font-semibold text-2xl w-[60px] leading-6">User Score</h1>
            <h1>{info.details.first_air_date}</h1>
            <h1>{info.details.genres.map((g)=>g.name).join(",")}</h1>
          </div>
           
           <h1 className="text-2xl font-semibold italic text-zinc-200">{info.details.tagline}</h1>
           <h1 className="text-xl mt-5 mb-3  text-zinc-200">Overview</h1>
           <p className="text-white w-[80%]">{info.details.overview}</p>
           <h1 className="text-xl mt-5 mb-3  text-zinc-200">Movie Translated</h1>
           <p className=" mb-5  text-white ">{info.translations.join(" ,")}</p>
           <Link className="text-white p-3 rounded-lg bg-[#6556CD]" to={`${pathname}/trailor`}>
           <i className="ri-play-fill"></i>
           Play Trailor</Link>
        </div>
      </div>
      
      
      <div className="absolute top-[30%] w-[50%] mb-5  flex flex-col gap-y-5">
        {info.watchProvider && info.watchProvider.flatrate && (
          <div className="flex gap-8 items-center text-white ">
            <h1>Available on Platforms</h1>
            {info.watchProvider.flatrate.map((w,i) => (
              <img
                key={i}
                className="w-[7vh] h-[7vh] object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              />
            ))}
          </div>
        )}

        {info.watchProvider && info.watchProvider.rent && (
          <div className="flex gap-8 items-center text-white ">
            <h1>Available on Rent</h1>
            {info.watchProvider.rent.map((w,i) => (
              <img key={i}
                className="w-[7vh] h-[7vh] object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              />
            ))}
          </div>
        )}
            {info.watchProvider && info.watchProvider.buy && (
          <div className="flex gap-8 items-center text-white ">
            <h1>Available on Buy</h1>
            {info.watchProvider.buy.map((w,i) => (
              <img
              key={i}
              title={w.Provider_name}
                className="w-[7vh] h-[7vh] object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              />
            ))}
          </div>
        )}
          
       
      </div>
         {/* seasons */}
         <hr className="mt-10 border-none h-[2px] bg-zinc-500" />
        <h1 className="text-2xl font-semibold text-white">Seasons</h1>
        <div className="w-[100%] flex overflow-y-hidden mb-5 p-5 ">
          {
           info.details.seasons.length>0? info.details.seasons.map((s,i)=>(
              <div className="w-[15vh] mr-[10%]">
             
              <img key={i} className='object-cover h-[30vh] min-w-[15vw] shadow-[8px_17px_38px_2px_rgba(0,0,.5)]' src={`https://image.tmdb.org/t/p/original/${s.poster_path}`} alt="" />
              <h1 className='text-2xl text-zinc-300 mt-3 font-semibold'> {s.name }</h1>
              </div>
            )):<h1 className="text-3xl mt-5 text-white text-center font-black">Not Available</h1>
          }

        </div>
       <Outlet/>

        {/* recommendations */}
        <hr className="mt-10 border-none h-[2px] bg-zinc-500" />
        <h1 className="text-2xl font-semibold text-white">Recomendations and Similar item</h1>
          <BottomCard data={ info.recommand ? info.recommand :info.similar} />
       <Outlet/>
    </div>
  ) : (
    <Loading />
  );
}

export default TvDetails