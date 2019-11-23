import "./main.css";
import React, { Component } from "react";
import { videos, images, familyMembers } from "./Data.jsx";
import Video from "./Video.jsx";
import Image from "./Image.jsx";
import FamilyMember from "./FamilyMember.jsx";
class App extends Component {
  render() {
    return (
      <div>
        {videos.map(vd => {
          return (
            <Video
              key={vd.id}
              header={vd.name}
              videoId={vd.id}
              footer={vd.caption}
            />
          );
        })}
        {images.map(img => {
          return <Image key={img.url} url={img.url} header={img.caption} />;
        })}
        {familyMembers.map(family => {
          return (
            <FamilyMember
              key={family.name}
              name={family.name}
              quote={family.quote}
            />
          );
        })}
      </div>
    );
  }
}
export default App;
