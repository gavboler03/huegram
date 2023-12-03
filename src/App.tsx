//import Menu from './components/Menu'
import Main from "./components/Main";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import axios from "axios";

interface Hues {
  hex_code: string;
  username: string;
  likes: number;
}

function App() {
  const [hues, setHues] = useState<Hues[]>([]);

  const [currentUser] = useState({
    username: "kavery",
    likes: 58,
    hues: [{ hex_code: "#ffa510", username: "kavery", likes: 15 }],
  });

  /*useEffect(() => {
    fetch("./sampleData.json")
      .then((res) => res.json())
      .then((data) => setHues(data));
  }, []);*/

  useEffect(() => {
    axios
      .get<Hues[]>("https://greenegunnar.pythonanywhere.com/api/hues/")
      .then((result) => setHues(result.data));
  }, []);

  const addNewHue = (hex_code: string) => {
    console.log(hex_code);
    const newHue = {
      hex_code,
      username: currentUser.username,
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
