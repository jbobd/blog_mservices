import React, { useState } from "react";
import {setPost} from "../../utils";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setPost(title);
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          className="form-control"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
        />
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default PostCreate;
