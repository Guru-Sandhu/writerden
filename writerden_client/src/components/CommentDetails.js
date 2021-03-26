import React from "react";

export const CommentDetails = (props) => {
  return (
  <div className="CommentDetails">
    <p>{props.body}</p>
      <div className="date">Commented {props.created_at.toLocaleString()}</div>
        Delete
  </div>);
}