import React from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Trailor = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const category = pathname.includes('movie') ? 'movie' : 'tv';
  const ytvdo = useSelector((state) => state[category].info.videos);

 
  console.log(ytvdo);

  return (
    <div className='absolute w-screen z-[200] bg-[rgba(0,0,0,0.9)] h-screen flex items-center justify-center top-0 left-0'>
      {ytvdo ? (
        <>
        <Link className='absolute hover:text-[#6556CD] ri-close-fill text-3xl text-white right-[10%] top-[5%]' onClick={()=>navigate(-1)} >
             
        </Link>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${ytvdo[0].key}`}
          playing={true}
         controls={true}
          width={1000}
          height={500}
        />
        </>
      ) : (
        <p className="text-white">Trailer not available</p>
      )}
    </div>
  );
};

export default Trailor;
