import React from "react";
import "./Image.css";

const Image = props => (
  <div className="mx-auto text-center m-1 p-1">
      <img className = "image" id={props.id} src={props.url}
        onClick={() => props.handleImageChange(props.id)} alt="clicky game" />
  </div>
);

export default Image;