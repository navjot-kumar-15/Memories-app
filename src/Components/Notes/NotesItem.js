import React from "react";
import "./NotesItem.css";
function NotesItem(props) {
  const { note } = props;
  return (
    <>
      <div className="col-md-3 col-sm-0  ">
        <div className="card my-2  ">
          <div className="card-body  ">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="card-title">{note.title}</h5>
              <i className="fa-sharp fa-solid fa-pen  icon"></i>
              <i className="fa-sharp fa-solid fa-trash  icon"></i>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotesItem;
