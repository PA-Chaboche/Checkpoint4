import Terre from "../assets/Terre.mp4";

import "./Home.css";

export default function Home() {
  return (
    <div className="Home-page">
      <video className="video-background" src={Terre} autoPlay loop muted />
    </div>
  );
}
