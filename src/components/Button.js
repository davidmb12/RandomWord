import React, {useState} from 'react'

export const Button = ({text,onClick}) => {
  return (
    <>
        <button className="ease-in-out duration-300 border-2 rounded-2xl p-2 bg-cyan-400 text-white hover:bg-sky-700 mt-10" onClick={onClick}>{text}</button>
    </>
  );
}


