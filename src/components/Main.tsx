import HueObject from "../HueObject";
import Hue from "./Hue";
import PostHue from "./PostHue";
import "./Font.css";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  hues: HueObject[];
  addHue: (color: string) => void;
  toggleLike: (id?: number) => void;
  searchHue: (color: string) => void;
}

const Main = ({ hues, addHue, toggleLike, searchHue }: Props) => {
  const [color, setColor] = useState("");
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-around mt-8 mb-8">
        <div className="flex flex-row font">
          <h1 className="text-indigo-500 text-5xl font-bold">#</h1>
          <h1 className="text-gray-500 text-5xl font-bold">H</h1>
          <h1 className="text-red-500 text-5xl font-bold">u</h1>
          <h1 className="text-green-500 text-5xl font-bold">e</h1>
          <h1 className="text-blue-500 text-5xl font-bold">g</h1>
          <h1 className="text-yellow-500 text-5xl font-bold">r</h1>
          <h1 className="text-purple-500 text-5xl font-bold">a</h1>
          <h1 className="text-orange-500 text-5xl font-bold">m</h1>
        </div>
        <div>
          <div className="flex flex-row">
            <input
              type="text"
              name="hue"
              id="hue"
              placeholder="Find a post"
              className="text-left h-9 w-52 pl-2 pr-2"
              onChange={(e) => setColor(e.target.value)}
            />

            <a
              href="#"
              className="btn bg-white text-black text-center pl-2 pr-2 text-lg hover:bg-blue-300 duration-200"
              onClick={() => searchHue(color)}
            >
              <FaSearch class="mt-2" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center gap-8 overflow-y-auto">
        <PostHue addHue={addHue} />
        {hues.map((hue) => (
          <Hue hue={hue} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
};

export default Main;
