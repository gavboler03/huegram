import HueObject from "../HueObject";
import Hue from "./Hue";
import PostHue from "./PostHue";
import Header from "./Header";
interface Props {
  hues: HueObject[];
  addHue: (color: string) => void;
  toggleLike: (id?: number) => void;
}

const Main = ({ hues, addHue, toggleLike }: Props) => {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <div className="flex flex-wrap w-full justify-center gap-8 overflow-y-auto m-4">
        <PostHue addHue={addHue} />

        {hues.map((hue) => (
          <Hue hue={hue} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
};

export default Main;
