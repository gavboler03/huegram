//import Menu from './components/Menu'
import Main from "./components/Main";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import HueObject from "./HueObject";

function App() {
  const [hues, setHues] = useState<HueObject[]>([]);
  const [currentUser] = useState({
    username: "kavery",
    likes: 58,
    hues: [{ id: 36, color: "#ffa510", username: "kavery", likes: 0 }],
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
      id: length + 1,
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

  return (
    <div className="flex bg-slate-800 h-screen overflow-hidden">
      {/* <Menu /> */}

      <Main hues={hues} addHue={addNewHue} toggleLike={toggleLike} />

      <Profile />
    </div>
  );
}

export default App;
