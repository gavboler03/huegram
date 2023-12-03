//import Menu from './components/Menu'
import Main from "./components/Main";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";

function App() {
  const [hues, setHues] = useState([]);

  const [currentUser] = useState({
    username: "kavery",
    likes: 58,
    hues: [{ id: 36, color: "#ffa510", username: "kavery", likes: 15 }],
  });

  useEffect(() => {
    fetch("./sampleData.json")
      .then((res) => res.json())
      .then((data) => setHues(data));
  }, []);

  const addNewHue = (color: string) => {
    console.log(color);
    const newHue = {
      color,
      username: currentUser.username,
      id: length + 1,
      likes: 0,
    };
    setHues([newHue, ...hues]);
  };

  return (
    <div className="flex bg-slate-800 h-screen overflow-hidden">
      {/* <Menu /> */}

      <Main hues={hues} addHue={addNewHue} />

      <Profile />
    </div>
  );
}

export default App;
