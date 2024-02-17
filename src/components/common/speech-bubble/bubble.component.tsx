import React from "react";
import './index.css';

interface Props {
  text: string;
  class1?: string;
  class2?: string;
}

function Bubble(props: Props) {
  return (
    <div className={`font-protest circular-sb`}>
      {props.text}
      <div className={`${props.class1 ? props.class1 : 'circle1'}`}></div>
      <div className={`${props.class2 ? props.class2 : 'circle2'}`}></div>
    </div>
  );
}

export default Bubble;
