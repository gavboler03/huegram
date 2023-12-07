import "./Font.css";

const Header = () => {
  return (
    <div className="flex flex-row justify-around p-8">
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

      <input
        type="text"
        name="hue"
        id="hue"
        placeholder="Find a post"
        className="text-center h-9"
      />
    </div>
  );
};

export default Header;
