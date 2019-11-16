import "./main.css";
import React, { Component } from "react";
import { videos, images } from "./Data.jsx";
import Video from "./Video.jsx";
import Image from "./Image.jsx";
class App extends Component {
  render() {
    return (
      <div>
        {videos.map(vd => {
          return <Video header={vd.name} videoId={vd.id} footer={vd.caption} />;
        })}
        {images.map(img => {
          return <Image url={img.url} header={img.caption} />;
        })}
      </div>
    );
  }
}
export default App;
