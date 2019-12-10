import React from "react";

export default function Message(props) {
    console.log(props)
    const message = `Hi ${props.user} wellcome`
  return (
    <div>
<p>{message} you are  {props.age}</p>

    </div>
  );
}
