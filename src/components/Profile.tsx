import kaylee from "/kaylee.jpg";
import "./Palette.css";
import { useState } from "react";

interface Props {
  addUserLike: () => void;
}

const Profile = ({ addUserLike }: Props) => {
  const [currentUser] = useState({
    username: "kodom",
    likes: 0,
    hues: [
      { id: 7, color: "#ffa510", username: "kodom", likes: 0, isLiked: false },
    ],
  });

  return (
    <div className="flex flex-col p-12 items-center text-white mt-10 max-md:hidden gap-10">
      <div className="flex w-1/2">
        <img src={kaylee} alt="" className="rounded-full" />
      </div>
      <h1 className="font-bold text-2xl">@{currentUser.username}</h1>
      <div className="palette">
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
      </div>
      <div className="">
        <p className="text-4xl font-bold" onChange={() => addUserLike()}>
          {currentUser.likes} likes
        </p>
      </div>
      <div className="">
        <p className="text-4xl font-bold">{currentUser.hues.length} hues</p>
      </div>
    </div>
  );
};

export default Profile;
