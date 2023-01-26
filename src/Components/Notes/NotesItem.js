import React, { useContext } from "react";
import "./NotesItem.css";
import noteContext from "../../Context/Notes/NoteContext";

function NotesItem(props) {
  const context = useContext(noteContext);
  // Getting the delete api from the NoteState
  const { deleteNote } = context;
  const { note, update } = props;
  return (
    <>
      <div className="col-lg-4  col-md-3 col-sm-12   ">
        <div className="card my-2  ">
          <div className="card-body  ">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title title">{note.title}</h5>
              <i
                className="fa-sharp fa-solid fa-pen  icon"
                onClick={() => update(note)}
              ></i>
              <i
                className="fa-sharp fa-solid fa-trash  icon"
                onClick={() => {
                  return deleteNote(note._id);
                }}
              ></i>
            </div>
            <p className="card-text desc">{note.description}</p>
            <p className="card-text tag">{note.tag}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesItem;
