import React, { useContext } from "react";
import noteContext from "../../Context/Notes/NoteContext";
import NotesItem from "./NotesItem";
import "./Notes.css";

function Notes() {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <>
      <div className="row mb-5">
        <h1>Your Note's</h1>
        {notes.map((note) => {
          return <NotesItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
}

export default Notes;
