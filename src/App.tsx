import Main from "./components/Main";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import HueObject from "./HueObject";

function App() {
  const [hues, setHues] = useState<HueObject[]>([]);
  const [currentUser] = useState({
    username: "kodom",
    likes: 58,
    hues: [],
  });

  useEffect(() => {
    fetch("./sampleData.json")
      .then((res) => res.json())
      .then((data) => setHues(data));
  }, []);

  const addNewHue = (color: string) => {
    const newHue = {
      color,
      username: currentUser.username,
      id: hues.length + 1,
      likes: 0,
      isLiked: false,
    };
    setHues([newHue, ...hues]);
  };

  const toggleLike = (id?: number) => {
    const newHues = [...hues];
    const hue = newHues.find((h) => h.id == id);
    if (hue) {
      hue.isLiked = !hue.isLiked;
      setHues(newHues);
    }
  };

  const searchHue = (color: string) => {
    const newHues = [...hues];
    const hue = newHues.filter((hue) => hue.color === color);
    if (hue) {
      setHues(hue);
    }
  };

  return (
    <div className="flex flex-row justify-center bg-slate-800 h-screen overflow-hidden">
      <Main
        hues={hues}
        addHue={addNewHue}
        toggleLike={toggleLike}
        searchHue={searchHue}
      />
      <Profile hues={hues} />
    </div>
  );
}

export default App;
