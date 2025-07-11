import React from "react";

export const Album = ({album, onClick}) => {
  const {albumImage, photoDate, likes, age} = album;
  return(
    <div onClick={onClick} className="ph:w-60 ph:p-3 ph:text-sm ph:m-3 dt:w-80 dt:p-6 dt:mg-5 dt:text-base bg-gradient-to-r from-amber-200 to-amber-300 rounded-lg w-72 hover:scale-105 hover:shadow-xl cursor-pointer">
    <img
      src={albumImage}
      className="w-full ph:h-60 dt:h-80 object-cover rounded mb-4"/>
      <h2 className="text-2xl font-semibold text-amber-500">{photoDate}</h2>
      <p className="text-amber-500">좋아요 수:{likes}</p>
      <p className="text-amber-500">나이: {likes}</p>
    </div>
  );
}