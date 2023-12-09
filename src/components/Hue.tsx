import HueObject from "../HueObject";
import { PiHeartStraightFill } from "react-icons/pi";

interface Props {
  hue: HueObject;
  toggleLike: (id?: number) => void;
}

const Hue = ({ hue, toggleLike }: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center shadow-black shadow-md"
      style={{ backgroundColor: hue.color }}
    >
      <div className="bg-gray-900 text-white flex w-full text-center justify-center p-4 rounded-t-2xl">
        <p className="text-xl opacity-80 font-bold">{hue.color}</p>
        <button
          onClick={() => toggleLike && toggleLike(hue.id)}
          className="ml-6"
        >
          <PiHeartStraightFill
            class={hue.isLiked ? "text-red-600 text-2xl" : "text-2xl"}
          />
        </button>
        <p className="text-lg font-bold ml-1">
          {hue.isLiked ? hue.likes + 1 : hue.likes}
        </p>
      </div>
      <div className="bg-gray-900 text-white w-full p-4 rounded-b-2xl">
        <p className="text-xl font-bold">{hue.username}</p>
      </div>
    </div>
  );
};

export default Hue;
