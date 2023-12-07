import kaylee from "/kaylee.jpg";
import "./Palette.css";

const Profile = () => {
  return (
    <div className="flex flex-col p-8 items-center text-white mt-10 max-md:hidden">
      <div className="flex w-1/2">
        <img src={kaylee} alt="" className="rounded-full" />
      </div>
      <h1 className="m-4 font-bold text-2xl">@kodom</h1>
      <div className="palette">
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
        <div style={{ backgroundColor: "#ff2299" }}></div>
      </div>
      <div className="m-14">
        <p className="text-4xl font-bold">10 likes</p>
      </div>
      <div className="m-14">
        <p className="text-4xl font-bold">47 hues</p>
      </div>
    </div>
  );
};

export default Profile;
