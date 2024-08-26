import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadperson, removeperson } from "../store/actions/PersonAction";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "./tamplates/Loading";
import { Link } from "react-router-dom";
import BottomCard from './tamplates/BottomCard'

const PersonDetail = () => {
  const {pathname} = useLocation()
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  console.log(info);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removeperson);
    };
  }, [id]);
  return info? (
    <div className="px-[13%] w-screen h-[140vh] bg-[#1F1E24] flex flex-col ">
      <nav className=" h-[10vh] items-center w-full text-zinc-100 flex gap-8 text-xl">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CD] ri-arrow-left-line"
        ></i> 
      </nav>
      
      <div className="w-full flex ">
      {/* part 2  left poster and details*/}
        <div className="w-[20%]">
        <img
          className="object-cover h-[40vh] shadow-[8px_17px_38px_2px_rgba(0,0,.5)]"
          src={`https://image.tmdb.org/t/p/original/${
            info.details.profile_path 
          }`}
          alt=""
        />
        <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
        <div className="text-2xl text-white flex gap-x-5">
       
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.facebook.com/${info.externalid.facebook_id}`}
        >
          <i className="ri-facebook-circle-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.instagram.com/${info.externalid.instagram_id}`}
        >
          <i className="ri-instagram-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.twitter.com/${info.externalid.twitter_id}`}
        >
          <i className="ri-twitter-x-fill"></i>
        </a>
        </div>
        {/* person info */}
        <h1 className="text-2xl my-2 text-zinc-500 font-semibold">Personal Info</h1>
        <h1 className="text-lg text-zinc-500 font-semibold">Known For</h1>
        <h1 className=" text-zinc-500 ">{info.details.known_for_department}</h1>
        <h1 className="text-lg text-zinc-500 font-semibold mt-3">Gender</h1>
        <h1 className=" text-zinc-500 ">{info.details.gender === 2 ?"Male":"Female"}</h1>
        <h1 className="text-lg text-zinc-500 font-semibold ">Birthday</h1>
        <h1 className=" text-zinc-500 ">{info.details.birthday}</h1>
        <h1 className="text-lg text-zinc-500 font-semibold">Deathdate</h1>
        <h1 className=" text-zinc-500 ">{info.details.deathday?info.details.deathday:"Still Alive"}</h1>
        <h1 className="text-lg text-zinc-500 font-semibold">Place of Birth</h1>
        <h1 className=" text-zinc-500 ">{info.details.place_of_birth}</h1>
        <h1 className="text-lg text-zinc-500 font-semibold">Also Known as</h1>
        <h1 className=" text-zinc-500 ">{info.details.also_known_as.join(",")}</h1>


        </div>

        {/* part 3 right details and infomrmation */}
        <div className="w-[80%] ml-[5%]">
            <h1 className="text-6xl text-zinc-400 font-semibold my-5">{info.details.name}</h1>
            <h1 className="text-lg text-zinc-400 font-semibold ">Biography</h1>
            <p className="text-zinc-400 mt-3">{info.details.biography}</p>
            <h1 className="text-lg text-zinc-500 font-semibold">Known For</h1>
            <h1 className=" text-zinc-500 ">{info.details.known_for_department}</h1>
        </div>
      </div>
    </div>
  ):<Loading/>
}

export default PersonDetail

