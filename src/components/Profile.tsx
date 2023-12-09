import "./Palette.css";
import HueObject from "../HueObject";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
interface Props {
  hues?: HueObject[];
}

const Profile = ({ hues }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const newHues = hues?.filter((hue) => hue.username === "kodom");
  const totalLikes = newHues?.reduce(
    (accum, hue) => (accum = hue.likes + accum),
    0
  );

  return (
    <div className="flex items-start mt-10 mr-10 w-34 max-md:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <MdOutlineClose class="text-white" />
        ) : (
          <GiHamburgerMenu class="text-white" />
        )}
      </button>
      {isOpen && (
        <div className="flex flex-col m-10 mt-28 items-center text-white gap-10">
          <h1 className="font-bold text-2xl">@kodom</h1>
          <div className="palette">
            {newHues?.map((hue) => (
              <div style={{ backgroundColor: hue.color }}></div>
            ))}
          </div>

          <p className="text-4xl font-bold">{totalLikes} likes</p>

          <p className="text-4xl font-bold">{newHues?.length} hues</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
