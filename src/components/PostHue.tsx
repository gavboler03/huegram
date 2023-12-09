import { useState } from "react";

interface Props {
  addHue: (color: string) => void;
}

const PostHue = (props: Props) => {
  const [color, setColor] = useState("");

  return (
    <div className="flex flex-row p-4 justify-evenly gap-8">
      <div
        className="flex flex-col w-full p-4 gap-4 rounded-3xl shadow-black shadow-md"
        style={{ backgroundColor: color }}
      >
        <input
          type="text"
          name="hue"
          id="hue"
          className="text-left mt-1 p-1"
          placeholder="Type a hex code"
          onChange={(event) => setColor(event.target.value)}
        />

        <a
          href="#"
          onClick={() => props.addHue(color)}
          className="btn bg-white text-cyan-950 text-center mt-24 text-xl font-bold border-2 border-solid border-black rounded-3xl hover:-translate-y-0.5 shadow-black shadow-sm p-1"
        >
          Post
        </a>
      </div>
    </div>
  );
};

export default PostHue;
