import React from 'react';

const Filter = ({ opt, title ,setfilter}) => {
  return (
    <div className="mb-3 flex justify-between">
      <h1 className="text-xl text-zinc-400 font-semibold">{title}</h1>
      <select className='bg-zinc-100 flex gap-4 items-center justify-center px-3 py-1 border-none outline-none w-[60%] rounded-lg' onChange={setfilter}  name="format" id="format" defaultValue="0">
        <option className='w-[40%]'  value="0" disabled>
          {title}
        </option>
        {opt.map((o, i) => (
          <option key={i} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
