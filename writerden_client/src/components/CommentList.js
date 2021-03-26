import React from "react"
import { CommentDetails } from "./CommentDetails"

export const CommentList = props => {
  return (
    <ul className="ui list">
      {props.reviews.map((comment) => (
        <div className="ui raised clearing segment" key={comment.id}>
          <CommentDetails 
          { ...comment }
          />
        </div>
      ))}
    </ul>
  )
}