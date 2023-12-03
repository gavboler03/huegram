import heart from "/heart.png";

interface HueObject {
  hex_code: string;
  username: string;
  likes: number;
}

interface Props {
  hue: HueObject;
}

const Hue = (props: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center shadow-black shadow-md"
      style={{ backgroundColor: props.hue.hex_code }}
    >
      <div className="bg-gray-900 text-white flex w-full text-center justify-center p-4 rounded-t-2xl">
        <p className="text-xl opacity-80 font-bold">{props.hue.hex_code}</p>
        <button>
          <img className="ml-8" src={heart} alt="" />
        </button>
      </div>

      <div className="bg-gray-900 text-white w-full p-4 rounded-b-2xl">
        <p className="text-xl font-bold">{props.hue.username}</p>
      </div>
    </div>
  );
};

export default Hue;
