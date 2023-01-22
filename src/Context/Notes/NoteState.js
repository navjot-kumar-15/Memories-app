import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const state = [
    {
      _id: "63c9063822d4a949dd626d63",
      user: "63c635493672ea10b87a0cff",
      title: "this is title 1",
      description: "this is a description 1",
      tag: "personal",
      date: "2023-01-19T08:58:32.576Z",
      __v: 0,
    },
    {
      _id: "63c9063822d4a949dd6gf26d63",
      user: "63c635493672ea10b87a0cff",
      title: "this is title 1",
      description: "this is a description 1",
      tag: "personal",
      date: "2023-01-19T08:58:32.576Z",
      __v: 0,
    },
    {
      _id: "63c9063822d4a949fdgdd626d63",
      user: "63c635493672ea10b87a0cff",
      title: "this is title 1",
      description: "this is a description 1",
      tag: "personal",
      date: "2023-01-19T08:58:32.576Z",
      __v: 0,
    },
    {
      _id: "63c9063822d4a949jfdd626d63",
      user: "63c635493672ea10b87a0cff",
      title: "this is title 1",
      description: "this is a description 1",
      tag: "personal",
      date: "2023-01-19T08:58:32.576Z",
      __v: 0,
    },
    {
      _id: "63c9063822d4a949aadd626d63",
      user: "63c635493672ea10b87a0cff",
      title: "this is title 1",
      description: "this is a description 1",
      tag: "personal",
      date: "2023-01-19T08:58:32.576Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(state);

  // Add a note
  const addNote = (title, description, tag) => {
    console.log("Adding a new note");
    let note = {
      _id: "63c9063822d4a949aafddsdd626d63",
      user: "63c635493672ea10b87a0cff",
      title: title,
      description: description,
      tag: tag,
      date: "2023-01-19T08:58:32.576Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = (id) => {};
  // Edit a note
  const upadateNote = (id) => {};
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, upadateNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
