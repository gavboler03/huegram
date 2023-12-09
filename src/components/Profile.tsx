import kaylee from "/kaylee.jpg";
import "./Palette.css";
import HueObject from "../HueObject";

interface Props {
  hues: HueObject[];
}

const Profile = ({ hues }: Props) => {
  return (
    <div className="flex flex-col p-12 items-center text-white mt-10 max-md:hidden gap-10">
      <div className="flex w-1/2">
        <img src={kaylee} alt="" className="rounded-full" />
      </div>
      <h1 className="font-bold text-2xl">@kodom</h1>
      <div className="palette">
        {hues.map((hue) => (
          <a href="#" style={{ backgroundColor: hue.color }}></a>
        ))}
      </div>

      <p className="text-4xl font-bold">50 likes</p>

      <p className="text-4xl font-bold">0 hues</p>
    </div>
  );
};

export default Profile;
