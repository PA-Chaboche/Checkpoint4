import Code from "../assets/code.mp4";

import "./Home.css";

export default function Home() {
  return (
    <div className="Home-page">
      <video className="video-background" src={Code} autoPlay loop muted />
    </div>
  );
}
