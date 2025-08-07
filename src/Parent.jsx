import React from "react";
import avtar from "./assets/Images/img_avatar2.png";

function Children(props) {
  return (
    <div className="card mt-5 mx-auto" style={{ width: "18rem" }}>
      <img
        src={props.image}
        alt={props.name}
        // width={props.size}
        // height={props.size}
        className="card-img-top img-fluid"
      />
      <div className="card-body p-3">
        <h1 className="">Children Component</h1>
        <p>This is a child component that can receive props.</p>
      </div>
    </div>
  );
}

export default function Parent() {
  return (
    <>
      <Children size={100} image={avtar} name="logo" />
    </>
  );
}
