import Header from "./Header";
import Hue from "./Hue";
import PostHue from "./PostHue";

interface HueObject {
  hex_code: string;
  username: string;
  likes: number;
}
interface Props {
  hues: HueObject[];
  addHue: (color: string) => void;
}

const Main = ({ hues, addHue }: Props) => {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <div className="flex flex-wrap w-full justify-center gap-8 overflow-y-auto m-5">
        <PostHue addHue={addHue} />

        {hues.map((hue) => (
          <Hue hue={hue} />
        ))}
      </div>
    </div>
  );
};

export default Main;
