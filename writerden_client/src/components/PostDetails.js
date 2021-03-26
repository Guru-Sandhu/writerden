import React from "react";

export const PostDetails = (props) => {
  const { title, body, author, views, created_at } = props;
  return (<div>
    <h2>{title}</h2>
    <p>
      {body}
      <br />
      {/* {author.first_name} */}
    </p>
    <p>
      <small>
        Seen {views} times - Created {created_at}
      </small>
    </p>
  </div>);
};