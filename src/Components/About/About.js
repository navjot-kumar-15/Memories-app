import React, { useContext } from "react";
import noteContext from "../../Context/Notes/NoteContext";
function About() {
  const a = useContext(noteContext);
  return <div>this is about</div>;
}

export default About;
